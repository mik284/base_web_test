/**
 * Shared form behaviour (§21.4): persistent labels, inline errors plus an
 * accessible summary, single submission with an in-progress state, success only
 * after the endpoint accepts the submission, and values kept on failure.
 */
import { ArrowLeftOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Link } from '@umijs/max';
import { Alert, Button, Checkbox, Form, Input, Radio, Select } from 'antd';
import type { Rule } from 'antd/es/form';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { SITE } from '@/constants/site';
import {
  EntryMotion,
  FormsUnavailableError,
  JourneyType,
  submitForm,
} from '@/services/forms';
import { track } from '@/utils/analytics';

type Status = 'idle' | 'submitting' | 'done' | 'unavailable' | 'failed';

/** One screen of a progressive form. `fields` lists the names validated before moving on. */
export interface FormStep {
  title: string;
  hint?: string;
  fields: string[];
  content: ReactNode;
}

const newSubmissionId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

export const FormShell: React.FC<{
  form: string;
  journeyType: JourneyType | ((values: Record<string, any>) => JourneyType);
  entryMotion: EntryMotion;
  /** Analytics event emitted once the submission is accepted. */
  event: string;
  submitLabel: string;
  confirmation: ReactNode;
  initialValues?: Record<string, unknown>;
  /** Context sent with the submission but not shown as a field. */
  context?: Record<string, string>;
  /** Operational notice shown above the submit button. */
  notice?: ReactNode;
  /** Splits the form into short steps; replaces `children`. */
  steps?: FormStep[];
  children?: ReactNode;
}> = ({
  form: formName,
  journeyType,
  entryMotion,
  event,
  submitLabel,
  confirmation,
  initialValues,
  context,
  notice,
  steps,
  children,
}) => {
  const [form] = Form.useForm();
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<string[]>([]);
  const [step, setStep] = useState(0);
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const movedStep = useRef(false);
  const lastStep = steps ? steps.length - 1 : 0;
  const onLastStep = step === lastStep;
  const submissionId = useRef(newSubmissionId());
  const confirmationRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === 'done') confirmationRef.current?.focus();
  }, [status]);

  useEffect(() => {
    if (errors.length) summaryRef.current?.focus();
  }, [errors]);

  // Move focus and scroll to the new step's heading (not on first render).
  useEffect(() => {
    if (!movedStep.current) return;
    stepHeadingRef.current?.focus();
    stepHeadingRef.current?.scrollIntoView({ block: 'start' });
  }, [step]);

  const goToStep = (index: number) => {
    movedStep.current = true;
    setErrors([]);
    setStep(index);
  };

  const next = async () => {
    try {
      await form.validateFields(steps![step].fields);
      track('form_step_completed', { form: formName, step: step + 1 });
      goToStep(step + 1);
    } catch (error: any) {
      setErrors(
        (error?.errorFields ?? []).map(
          (field: { errors: string[] }) => field.errors[0],
        ),
      );
    }
  };

  const onFinish = async (values: Record<string, any>) => {
    setErrors([]);
    // Honeypot: people never see this field, so a value means a bot.
    if (values.website_confirm) {
      setStatus('done');
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { website_confirm, ...fields } = values;
    setStatus('submitting');
    try {
      await submitForm({
        form: formName,
        journeyType:
          typeof journeyType === 'function' ? journeyType(fields) : journeyType,
        entryMotion,
        submissionId: submissionId.current,
        fields: { ...fields, ...context },
      });
      track(event, { form: formName });
      setStatus('done');
    } catch (error) {
      setStatus(
        error instanceof FormsUnavailableError ? 'unavailable' : 'failed',
      );
    }
  };

  if (status === 'done') {
    return (
      <div
        ref={confirmationRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-mint bg-mint/15 p-6 md:p-8 outline-none"
      >
        <CheckCircleOutlined
          aria-hidden="true"
          className="text-2xl text-navy"
        />
        <p className="m-0 mt-3 text-base md:text-lg font-semibold leading-relaxed text-navy">
          {confirmation}
        </p>
      </div>
    );
  }

  return (
    <Form
      form={form}
      name={formName}
      layout="vertical"
      requiredMark="optional"
      initialValues={initialValues}
      onFinish={onFinish}
      // Clear the summary once the visitor starts correcting fields.
      onValuesChange={() => errors.length && setErrors([])}
      onFinishFailed={({ errorFields }) => {
        // In a stepped form, return to the first step with a problem.
        const firstBad = steps?.findIndex((item) =>
          errorFields.some((field) =>
            item.fields.includes(String(field.name[0])),
          ),
        );
        if (firstBad !== undefined && firstBad >= 0 && firstBad !== step) {
          goToStep(firstBad);
        }
        setErrors(errorFields.map((field) => field.errors[0]));
      }}
      scrollToFirstError={!steps}
      size="large"
      className="bp-form"
    >
      {steps ? (
        <div className="mb-8">
          <ol
            aria-hidden="true"
            className="list-none m-0 p-0 grid gap-2"
            style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
          >
            {steps.map((item, i) => (
              <li
                key={item.title}
                className={`h-1.5 rounded-full transition-colors ${
                  i <= step ? 'bg-navy' : 'bg-surfaceAlt'
                }`}
              />
            ))}
          </ol>
          <p className="m-0 mt-5 text-sm font-semibold text-navy/75">
            Step {step + 1} of {steps.length}
          </p>
          <h2
            id={`${formName}-step`}
            ref={stepHeadingRef}
            tabIndex={-1}
            className="m-0 mt-1 text-2xl font-bold outline-none"
          >
            {steps[step].title}
          </h2>
          {steps[step].hint && (
            <p className="m-0 mt-2 text-navy/75">{steps[step].hint}</p>
          )}
        </div>
      ) : (
        <p className="m-0 mb-6 text-sm text-navy/80">
          All fields are required unless marked optional.
        </p>
      )}

      {errors.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} className="mb-6 outline-none">
          <Alert
            type="error"
            showIcon
            message="Please check the following:"
            description={
              <ul className="m-0 pl-5">
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            }
          />
        </div>
      )}

      {steps
        ? steps.map((item, i) => (
            // Every step stays mounted so values persist; only the current one shows.
            <div key={item.title} className={i === step ? '' : 'hidden'}>
              {item.content}
            </div>
          ))
        : children}

      <div className="hidden" aria-hidden="true">
        <Form.Item name="website_confirm" label="Leave this field empty">
          <Input tabIndex={-1} autoComplete="off" />
        </Form.Item>
      </div>

      {notice && onLastStep && (
        <p className="m-0 mb-6 text-sm leading-relaxed text-navy/80">
          {notice}
        </p>
      )}

      {(status === 'unavailable' || status === 'failed') && (
        <div role="alert" className="mb-6">
          <Alert
            type="warning"
            showIcon
            message="Your details have not been sent."
            description={
              <>
                {status === 'failed'
                  ? 'Something went wrong while sending this form. Your entries are still here, so you can try again. '
                  : 'This form cannot send messages from the website at the moment. '}
                You can also email{' '}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{' '}
                <a href={SITE.phoneHref}>{SITE.phone}</a>.
              </>
            }
          />
        </div>
      )}

      <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-3">
        {steps && step > 0 && (
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => goToStep(step - 1)}
            disabled={status === 'submitting'}
            className="w-full sm:w-auto rounded-full font-semibold"
          >
            Back
          </Button>
        )}
        {/* Distinct keys stop React reusing the Continue button as Submit,
            which would let the click that reaches the last step submit it. */}
        {onLastStep ? (
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            loading={status === 'submitting'}
            disabled={status === 'submitting'}
            className="w-full sm:w-auto min-w-[220px] rounded-full font-semibold"
          >
            {status === 'submitting' ? 'Sending…' : submitLabel}
          </Button>
        ) : (
          <Button
            key="continue"
            type="primary"
            onClick={next}
            className="w-full sm:w-auto min-w-[220px] rounded-full font-semibold"
          >
            Continue
          </Button>
        )}
      </div>
    </Form>
  );
};

/* ── Fields ────────────────────────────────────────────────────────── */

const required = (message: string): Rule => ({
  required: true,
  whitespace: true,
  message,
});

export const NameField = () => (
  <Form.Item name="name" label="Name" rules={[required('Enter your name.')]}>
    <Input autoComplete="name" />
  </Form.Item>
);

export const EmailField: React.FC<{ label?: string }> = ({
  label = 'Email',
}) => (
  <Form.Item
    name="email"
    label={label}
    rules={[
      required('Enter your email address.'),
      { type: 'email', message: 'Enter a valid email address.' },
    ]}
  >
    <Input type="email" autoComplete="email" inputMode="email" />
  </Form.Item>
);

export const PhoneField: React.FC<{ isRequired?: boolean }> = ({
  isRequired,
}) => (
  <Form.Item
    name="phone"
    label="Phone"
    rules={[
      ...(isRequired ? [required('Enter your phone number.')] : []),
      {
        pattern: /^\+?[\d\s()-]{7,20}$/,
        message: 'Enter a valid phone number.',
      },
    ]}
  >
    <Input type="tel" autoComplete="tel" inputMode="tel" />
  </Form.Item>
);

export const TextField: React.FC<{
  name: string;
  label: string;
  optional?: boolean;
  autoComplete?: string;
  type?: string;
}> = ({ name, label, optional, autoComplete, type }) => (
  <Form.Item
    name={name}
    label={label}
    rules={optional ? [] : [required(`Enter ${label.toLowerCase()}.`)]}
  >
    <Input autoComplete={autoComplete} type={type} />
  </Form.Item>
);

export const TextAreaField: React.FC<{
  name: string;
  label: string;
  optional?: boolean;
  extra?: ReactNode;
}> = ({ name, label, optional, extra }) => (
  <Form.Item
    name={name}
    label={label}
    extra={extra}
    rules={
      optional
        ? [{ max: 2000, message: 'Keep this under 2,000 characters.' }]
        : [
            required(`Enter ${label.toLowerCase()}.`),
            { max: 2000, message: 'Keep this under 2,000 characters.' },
          ]
    }
  >
    <Input.TextArea rows={5} maxLength={2000} />
  </Form.Item>
);

export const SelectField: React.FC<{
  name: string;
  label: string;
  options: string[];
  optional?: boolean;
}> = ({ name, label, options, optional }) => (
  <Form.Item
    name={name}
    label={label}
    rules={
      optional
        ? []
        : [{ required: true, message: `Choose ${label.toLowerCase()}.` }]
    }
  >
    <Select
      placeholder="Choose one"
      options={options.map((value) => ({ value, label: value }))}
    />
  </Form.Item>
);

const CHOICE_COLUMNS = { 1: '', 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3' };

const ChoiceLabel: React.FC<{ value: string; description?: string }> = ({
  value,
  description,
}) => (
  <>
    <span className="block font-semibold text-navy">{value}</span>
    {description && (
      <span className="block mt-0.5 text-sm text-navy/75">{description}</span>
    )}
  </>
);

type ChoiceOption = { value: string; description?: string };

/** Single choice shown as tappable cards instead of a dropdown. */
export const ChoiceField: React.FC<{
  name: string;
  label: string;
  options: ChoiceOption[];
  columns?: 1 | 2 | 3;
  /** Error shown when nothing is chosen; omit for an optional field. */
  message?: string;
}> = ({ name, label, options, columns = 1, message }) => (
  <Form.Item
    name={name}
    label={label}
    rules={message ? [{ required: true, message }] : []}
  >
    <Radio.Group
      className={`bp-choice grid gap-3 w-full ${CHOICE_COLUMNS[columns]}`}
    >
      {options.map((option) => (
        <Radio key={option.value} value={option.value}>
          <ChoiceLabel {...option} />
        </Radio>
      ))}
    </Radio.Group>
  </Form.Item>
);

/** Multiple choice shown as tappable cards. */
export const MultiChoiceField: React.FC<{
  name: string;
  label: string;
  options: ChoiceOption[];
  columns?: 1 | 2 | 3;
  /** Error shown when nothing is chosen; omit for an optional field. */
  message?: string;
}> = ({ name, label, options, columns = 1, message }) => (
  <Form.Item
    name={name}
    label={label}
    rules={message ? [{ required: true, type: 'array', min: 1, message }] : []}
  >
    <Checkbox.Group
      className={`bp-choice grid gap-3 w-full ${CHOICE_COLUMNS[columns]}`}
    >
      {options.map((option) => (
        <Checkbox key={option.value} value={option.value}>
          <ChoiceLabel {...option} />
        </Checkbox>
      ))}
    </Checkbox.Group>
  </Form.Item>
);

/** Explicit, unchecked permission for phone or WhatsApp contact. */
export const PhonePermissionField: React.FC<{ isRequired?: boolean }> = ({
  isRequired,
}) => (
  <Form.Item
    name="phone_contact_permission"
    valuePropName="checked"
    rules={
      isRequired
        ? [
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error(
                        'Confirm that we may contact you by phone or WhatsApp.',
                      ),
                    ),
            },
          ]
        : []
    }
  >
    <Checkbox>
      You may contact me by phone or WhatsApp about this request.
    </Checkbox>
  </Form.Item>
);

/** General Basepoint marketing consent: separate, optional and unchecked. */
export const MarketingConsentField = () => (
  <Form.Item name="marketing_opt_in" valuePropName="checked">
    <Checkbox>
      Send me occasional Basepoint news and product updates. (Optional)
    </Checkbox>
  </Form.Item>
);

export const PrivacyNotice: React.FC<{ children?: ReactNode }> = ({
  children = "We'll use these details to respond to your request.",
}) => (
  <>
    {children} See our <Link to="/privacy">Privacy Policy</Link>.
  </>
);

/** A card that frames a form on a page. */
export const FormCard: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="rounded-3xl bg-white border border-surfaceAlt shadow-soft p-6 md:p-10">
    {children}
  </div>
);
