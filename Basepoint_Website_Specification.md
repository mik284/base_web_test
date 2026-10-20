# Basepoint Website Specification

**Canonical implementation specification · 10 October 2026**  
**Website:** https://basepoint.co.ke  
**For:** Engineering, Product, Design, Marketing/Growth, Sales, Finance and Legal

## 1. Authority and purpose

This document is the single source of truth for Basepoint's public website: positioning, information architecture, literal copy, product-status treatment, conversion paths, design, attribution, onboarding and launch acceptance. Every required page is specified here. Implementation must not depend on another website brief or an undocumented copy decision.

Copy marked **Public copy** is ready for placement subject to its stated publication gates. Requirements, tables of decisions, sample calculations and operational notes are internal. They must not appear in the public interface unless explicitly labelled as public copy.

Product/Engineering confirmation governs capability claims. Finance governs prices and incentives. Legal governs legal text and data permissions. This specification governs the website's presentation of those facts. When a fact changes, amend the affected entry here before publishing it.

### 1.1 What the website must achieve

1. Help a business owner understand what Base can help them do today.
2. Make Duka the practical starting point for standard retail operations.
3. Provide a working account-creation path when provisioning and offer terms support it.
4. Route complex needs into an accountable assisted conversation.
5. Explain how other Base products can support expansion without implying unconfirmed availability.
6. Give Base Collabs a clear identity, attributable referrals and useful materials.
7. Build qualified interest in Biashara AI through concrete decision scenarios.
8. Turn useful learning into better operating habits and measurable product adoption.

### 1.2 Core narrative

**See the business clearly. Choose what matters. Act. Review what changed.**

This is the organising narrative across the website. It connects records to decisions and decisions to disciplined follow-through. It is a communication framework, not a claim that all four stages are automated in the product.

The website must distinguish:

- **Software available today:** verified Duka functionality.
- **Human help:** the assistance actually available from Basepoint or an approved Collab.
- **Learning:** practical guidance and tools that visitors can use directly.
- **Future intelligence:** Biashara AI concepts, explicitly in development.

Do not promise guaranteed growth, profit increases, unlimited expert access, scientific validation, predictive success scores, lending access or automatic execution without evidence and a defined service or product.

## 2. Brand and language

### 2.1 Brand hierarchy

| Name | Role | Public descriptor |
| --- | --- | --- |
| Basepoint Cloud Technologies | Organisation | The team building Base |
| Base | Product ecosystem | Business software for clearer daily operations |
| Duka | Retail entry product | Sales, stock and receipts |
| Pesa | Finance product | Money and financial records; capability-specific copy requires verification |
| Mteja | Customer product | Customer records and relationships; capability-specific copy requires verification |
| Bandu | People product | People and team administration; capability-specific copy requires verification |
| Biashara AI | Intelligence concept | Commercial decision support, in development |
| Base Collabs | Distribution and support network | Experts, advisors and resellers helping businesses adopt Base |
| Basepoint Learn | Educational layer | Practical guides for running a business |

Dala and any separately named insight utility have no public navigation entry until Product confirms their identity, audience and availability. Their omission does not block Duka or other independent pages.

**Master promise:** Know what matters. Before it matters.  
**Tagline:** Achieve More™  
**Organising idea:** Base makes the business visible.

Use “operating system for modern business” as secondary platform language. On merchant pages, explain the actual tasks before using category language. Do not lead with ERP.

### 2.2 Writing rules

- Lead with a task or a decision the reader recognises.
- Prefer “record a sale”, “count stock”, “review the day” and “plan your next step” to abstract optimisation language.
- One central benefit per section. Explain the mechanism immediately after it.
- Distinguish sales, cash received, margin and profit. Never treat them as interchangeable.
- Avoid “seamless”, “revolutionary”, “effortlessly”, “all-in-one AI-powered” and unsupported superlatives.
- Do not blame owners for business difficulties. Offer a manageable next step.
- Speak plainly about available help, prerequisites and limitations.
- Use “in development” for undelivered products. “Coming soon” must not substitute for a confirmed timeline.
- Use consistent CTA labels and sentence case. Product names remain title case.
- English is the launch language. Add Swahili pages only with reviewed translation, equivalent product-status information and maintained content ownership. Do not claim a bilingual app unless the relevant workflows are verified.

### 2.3 Visual system

| Element | Requirement |
| --- | --- |
| Primary navy | `#1F2B5D` |
| Digital green | `#8AFEA7` |
| Print green | `#9DE89F`, for print derivatives only |
| Secondary accents | `#0800F0`, `#80E4F1`, `#F7B344`, `#FFE700`; use sparingly |
| Background | White dominant, restrained neutral panels |
| Marketing typography | Montserrat with a system sans-serif fallback |
| Product imagery | Actual product screens where possible; sample data clearly identified |
| Icons | Consistent simple line icons |
| Layout | Clear hierarchy, generous spacing, readable mobile paragraphs |

Check contrast for every text/background combination. Green is an accent, not an automatic text colour on white. Marketing pages must not introduce a separate product UI font dependency merely to imitate app screens.

Use one strong product image per major section. No decorative dashboard collage, autoplay video or complex animation required. Source imagery from owned or properly licensed assets. Obtain permission for identifiable people and customer businesses.

## 3. Product truth and publication rules

### 3.1 Capability and offer registry

Product maintains a registry used by the CMS. Minimum fields: `product`, `capability`, `status`, `audience`, `supported_surface`, `prerequisites`, `evidence_reference`, `owner`, `verified_at`, `approved_copy`, `offer_id` and `destination`.

Allowed statuses:

| Status | Public treatment | Conversion action |
| --- | --- | --- |
| Available | Describe only verified functionality | Start, log in, add product or request setup help as supported |
| Pilot | State access restrictions and support boundaries | Request pilot information |
| Early access | State what is available and who is eligible | Join early access |
| In development | Describe intended scenarios as concepts | Join the waitlist or register interest |
| Unverified | Do not publish a capability claim | General information request only |

Duka's sales recording, stock tracking and receipt workflow form the baseline public story. Product must verify the exact device support and screens before publishing imagery. No default claim of offline operation, multi-branch access, e-commerce sync, payment matching, M-Pesa integration or eTIMS compliance is authorised by this document.

Pesa, Mteja and Bandu receive conservative product-information pages until their capabilities, plans and provisioning paths are verified. They must not inherit Duka's availability or free offer.

Biashara AI remains in development with a waitlist. Hospitality remains an early-access interest proposition unless Product approves a functioning release. Neither has a public launch-date commitment or approved price in this specification.

### 3.2 Evidence rules

- No unverified ARR, revenue, total-customer, market-leadership or growth claims.
- No named customer or partner logo without permission and an accurate relationship label.
- No borrowed press logos, competitor testimonials, benchmark savings or outcome percentages.
- Screens with sample numbers: **“Product screen with illustrative data.”**
- Concept interfaces: **“Illustrative concept — not a live product.”**
- Real customer screens: use permission, redact sensitive information and state the relevant reporting period where needed.
- Hide empty testimonials and case-study sections rather than publishing fabricated examples or repeated placeholders.

A publishable result must include definition, sample, period, source, permission, approver and review date. Onboarding speed is not usage, activation, retention or growth. Any pilot timing claim must specify whether it is per shop or for the whole cohort and what “onboarded” means.

### 3.3 Pricing and service truth

Finance must approve price, currency, billing interval, taxes, setup fees, limits, cancellation, trial duration and post-trial terms. No unresolved price placeholder may reach production.

A free offer is publishable only with a documented offer record and a working flow. Human help, expert introductions and integrations must state scope and fees when relevant. Do not imply advisory services are included in a software subscription.

## 4. Canonical information architecture

### 4.1 Routes

| Route | Role | Launch treatment |
| --- | --- | --- |
| `/` | Homepage | Required |
| `/platform` | Explain Base and expansion | Required |
| `/products/duka` | Retail product | Required |
| `/products/pesa` | Finance product information | Conservative copy; gated capability sections |
| `/products/mteja` | Customer product information | Conservative copy; gated capability sections |
| `/products/bandu` | People product information | Conservative copy; gated capability sections |
| `/products/duka/hospitality` | Hospitality interest | Early-access registration |
| `/solutions/retailers` | Retail needs | Required |
| `/solutions/distributors` | Distribution needs | Assisted discovery; no unverified portal claims |
| `/solutions/enterprise` | Complex operations | Assisted discovery |
| `/solutions/biashara-ai` | Intelligence vision and qualification | Waitlist only |
| `/start` | Duka account creation or explicit availability fallback | Required |
| `/demo` | Assisted qualification | Required |
| `/pricing` | Offers, boundaries and routing | Required |
| `/collabs` | Experts, advisors and resellers | Required for recruitment |
| `/collabs/apply` | Collab application | Required for recruitment |
| `/refer` | Referral explanation and entry | Publish when terms and attribution are ready |
| `/partners` | Strategic and integration partnerships | Required |
| `/partners/apply` | Partnership enquiry | Required |
| `/resources` | Basepoint Learn | Required with three substantive guides |
| `/resources/daily-close` | Daily review guide | Required |
| `/resources/stock-count` | Stock guide | Required |
| `/resources/second-outlet` | Expansion readiness guide | Required |
| `/resources/tools/margin` | Optional transparent calculator | Deferred until calculation QA |
| `/company` | Organisation | Required |
| `/contact` | Sales/support contact | Required |
| `/privacy`, `/terms`, `/cookies` | Legal and consent | Required as applicable |
| `/refer/terms` | Referral rules | Required before referral rewards |
| `/collabs/experts`, `/collabs/academy`, `/collabs/opportunity` | Directory, learning and opportunity capture | Deferred; no empty launch links |

Use Learn categories as filters initially: Run, Money, Grow, Customers and Industry. Do not generate empty category pages.

### 4.2 Navigation

**Desktop:** Products · Solutions · Learn · Partners · Pricing · Log in · Start with Duka.

Products menu pairs each product name with its plain descriptor and actual status. Solutions menu includes Retailers, Distributors, Growing operations, Hospitality — early access, and Biashara AI — in development.

Partners menu distinguishes **Base Collabs — experts and resellers**, **Refer a business**, and **Strategic partnerships**. Only display destinations that are ready.

Footer: Products, Learn, Base Collabs, Partnerships, Company, Contact, Product documentation, Privacy, Terms and Cookie settings. Product documentation links to https://basepoint.mintlify.app without duplicating its technical content.

Mobile navigation uses the same labels and one primary action. Never place login, start and demo as three competing sticky buttons.

On Biashara AI, the only conversion action is **Join the waitlist**. Replace the global start action on that page with the waitlist action; normal navigation and login remain available.

## 5. Conversion and qualification

### 5.1 CTA state rules

| Context | Default primary | Secondary | Gate |
| --- | --- | --- | --- |
| Home, Duka, retail | Start with Duka | Get setup help | Working provisioning |
| Same pages with confirmed free offer | Start free with Duka | Get setup help | Working provisioning plus approved free terms |
| Same pages without working provisioning | Request Duka access | Get setup help | Explicit lead-capture wording |
| Platform | Explore Duka | Discuss your setup | Verified destination |
| Add-on product, available | Add to your account | Ask about this product | Actual plan and provisioning support |
| Add-on product, unverified | Ask about Pesa/Mteja/Bandu | — | Information request |
| Distributors, enterprise | Discuss your operation | Explore Duka | Assisted discovery |
| Hospitality | Join early access | Discuss your setup | Status labelled |
| Biashara AI | Join the waitlist | — | No demo, price or signup promise |
| Collabs | Become a Collab | See how it works | Application ready |
| Referrals | Refer a business | See referral terms | Terms and tracking ready |
| Strategic partners | Explore a partnership | — | Enquiry ready |

“Start with Duka” must lead directly to account creation when that is available. It must not disguise a sales lead form. “Get setup help” leads to `/demo` with the originating context preserved. Name the form **“Tell us about your setup”**, not a compulsory demo for every visitor.

### 5.2 Routing rules

Default to self-serve for standard single-location retail where the owner chooses to start. Referral source does not make a signup assisted. Offer assistance if the visitor requests it.

Escalate for custom integrations, complex migration, coordinated multi-location rollout, distributor workflows or needs outside verified product scope. Multi-location is a qualification signal, not an automatic prohibition on self-serve if the product can support it.

Waitlist registration is neither account creation nor merchant activation. Collab applications and strategic enquiries are separate journeys.

## 6. Homepage — `/`

### 6.1 Hero

**Public copy**

Kicker: **BUSINESS SOFTWARE FOR YOUR EVERYDAY OPERATIONS**

H1: **Know what sold. Know what's left. Know your next move.**

Body: **Start with Duka to record sales, track stock and issue receipts. Build a clearer picture of your business, then explore more of Base as your needs grow.**

Primary: **Start with Duka**  
Secondary: **Get setup help**  
Brand line: **Know what matters. Before it matters.**

Use a verified Duka screen with the required data caption. Product image alt text describes the workflow, not marketing adjectives.

### 6.2 Practical problem

H2: **Sales in one book, stock in another. Your records shouldn't be scattered.**

Body: **When sales and stock live in different places, reviewing the day takes more work. Duka gives you a practical place to start: record what you sell, keep stock records and issue receipts.**

Cards:

- **Record the sale.** Keep a record of what was sold.
- **Track the stock.** Review your recorded stock and compare it with what is on the shelf.
- **Issue the receipt.** Give customers a receipt for their purchase.

Image: one background-removed photo of a trader beside the heading, standing on a brand-colour panel (falls back to an in-context shop photo). Until an owned shoot with signed releases exists, licensed stock photography may stand in and is recorded in `src/constants/media.ts`.

### 6.2a Everyday counters

Kicker: **EVERYDAY BUSINESSES**  
H2: **Every sale starts at a counter.**  
Body: **Kiosks, butcheries, cafés and fruit stalls: busy counters where clear records make the end of the day easier.**

A strip of four photos of real counters. Omit the section when no approved photos exist. The photos illustrate the setting only; they do not claim that the people shown use Duka.

### 6.3 How to use the information

H2: **Build a clearer routine, one day at a time.**

1. **See where you stand.** Review the records you have and check what needs attention.
2. **Choose one priority.** Focus on a practical question: a stock gap, missing records or a setup task.
3. **Take the next step.** Use your records and a relevant Learn guide to work through it.
4. **Review what changed.** Return to the records and decide what to keep doing or improve.

Caption (below the steps): **A suggested operating routine. Planning and review remain your responsibility.**

This is educational content. Do not render a goal planner, automated action plan or accountability dashboard as a shipping feature.

### 6.4 Proof module

H2: **See Base in everyday business.**

Show one approved customer story with its concrete task, period and evidence. Omit this entire section until approved content exists. Product workflow demonstrations remain visible regardless.

### 6.5 Two ways to begin

H2: **Start your way.**

Card A title: **Ready to try Duka?**  
Body: **Start with the sales, stock and receipt workflow.**  
CTA: use the applicable Duka CTA state.

Card B title: **Need help with your setup?**  
Body: **Tell us about your business, your current tools and what you want to change. We'll use that information to discuss the right next step.**  
CTA: **Get setup help**.

### 6.6 Expansion

H2: **Start with what you need. Explore more as you grow.**

Body: **Duka is the retail starting point. Explore Pesa for financial records, Mteja for customer relationships and Bandu for people administration. Each product page explains its current availability.**

Cards use the descriptors and statuses in Section 2. CTA: **Explore Base** → `/platform`.

### 6.7 Human support

H2: **Better tools. People who understand the work.**

Body: **Base Collabs brings experts, advisors and resellers into Basepoint's network. Tell us what help you need, and we can discuss available support for your setup.**

CTA: **Ask about support** → `/demo?intent=support`.

Service note: **Availability, scope and any fees are confirmed before support begins.**

### 6.8 Biashara AI teaser

Kicker: **BIASHARA AI — IN DEVELOPMENT**

H2: **From business records to better decisions.**

Body: **We're exploring how Biashara AI could help organisations turn business signals into proposed actions, coordinate follow-through and learn from results. Explore the concept and register your interest.**

CTA: **Explore Biashara AI** → `/solutions/biashara-ai`.

### 6.9 Learn and final CTA

H2: **Make your next business review more useful.**

Body: **Start with practical guides to reviewing daily records, counting stock and preparing for another outlet.**

Display the three launch guides. Final banner: **Close the day knowing what sold. Start with Duka.** Primary Duka CTA and **Get setup help**.

### 6.10 Homepage FAQs

**Where should I begin?** Start with Duka if you need sales, stock and receipts for a retail business. If your needs are more complex, tell us about your setup.

**Can I get help setting up?** You can request help. We'll confirm the available support, scope and any fees before work begins.

**Is Biashara AI available?** No. It is in development. You can join the waitlist for updates and potential opportunities to contribute to its development.

**Does Base guarantee business growth?** No. Base provides tools and information. Business outcomes depend on many factors, including the quality of your records and the decisions you make.

## 7. Platform — `/platform`

**Public copy**

Kicker: **THE BASE ECOSYSTEM**  
H1: **Start with clearer operations. Build from there.**  
Body: **Base brings a family of business products under one identity. Start with Duka's sales, stock and receipts, and explore the products relevant to your next business need.**  
Primary: **Explore Duka**. Secondary: **Discuss your setup**.

H2: **A clear job for every product.**

| Product card | Body | CTA |
| --- | --- | --- |
| Duka — Sales and stock | Record sales, track stock and issue receipts. | Explore Duka |
| Pesa — Financial records | Explore Pesa's approach to money and financial records. | Explore Pesa |
| Mteja — Customer relationships | Explore Mteja's approach to customer records and relationships. | Explore Mteja |
| Bandu — People administration | Explore Bandu's approach to people and team administration. | Explore Bandu |

Show each product's status beside its name. The table does not authorise live integration, shared data or a purchasable bundle.

H2: **Choose the next product around a real need.**  
Body: **A second product should solve a problem you can name. Tell us where your current process breaks down, and we'll discuss which available product or support option fits.**

H2: **Records, practical guidance and people.**  
Body: **Use Basepoint Learn for operating guidance. Ask about setup support when you need it. Explore Biashara AI to see the intelligence concepts we're developing.**

FAQ: **Are all products included together?** Product access and pricing are confirmed for each offer. Check the pricing page or ask about your intended setup.  
FAQ: **Do the products share data automatically?** We'll confirm which connections are supported for the products and workflows you need.

Final banner: **Begin with the job you need to do today.** → **Explore Duka**.

## 8. Duka — `/products/duka`

**Public copy**

Kicker: **DUKA · SALES, STOCK AND RECEIPTS**  
H1: **Keep the sale, the stock and the receipt in view.**  
Body: **Record daily sales, track inventory and issue receipts with Duka. Start with the everyday retail tasks that make your business easier to review.**  
Primary: applicable Duka CTA. Secondary: **Get setup help**.

H2: **Three everyday jobs. One practical starting point.**

- **Record sales.** Keep a record of the items sold during the day.
- **Track inventory.** Review recorded stock and use regular physical counts to check it.
- **Issue receipts.** Give a customer a receipt for the purchase.

H2: **See the workflow before you start.**  
Show three verified screens in sequence: enter a sale; issue a receipt; review the relevant stock or sales record. Captions must match the real UI. No concept screens in this sequence.

H2: **A simple daily habit.**  
Body: **Record sales as they happen. Check records during your daily review. Count stock regularly so your records reflect the shelf.**  
CTA: **Read the daily review guide**.

H2: **What to confirm for your setup.**  
Body: **Tell us which device you use, whether you need printed receipts and what records you already keep. We'll confirm the supported setup and any preparation needed.**

Publish a verified requirements table covering device/browser, connectivity, receipt hardware, supported account limits, data import, payments, tax features and setup assistance. Hide unresolved capability rows; do not publish empty values. Requirements essential to use must be resolved before account creation goes live.

H2: **Clear terms before you begin.**  
Body: **Check the available Duka offer and what it includes on our pricing page.**  
CTA: **See pricing**.

FAQs:

- **Do I need a demo first?** If account creation is available for your setup, you can begin directly. Ask for help whenever you need it.
- **Can I move existing records into Duka?** Tell us what you currently use. We'll confirm the supported import or setup options.
- **Can I keep selling without internet?** Ask us to confirm the connectivity requirements for the version and device you intend to use.
- **Are payments and tax features included?** We'll confirm the supported features and requirements for your plan. Recording a sale does not by itself confirm a payment or satisfy every tax obligation.
- **Can I run multiple outlets?** Tell us how many outlets you have and what you need to coordinate. We'll confirm the available setup.

Final banner: **Start with a clearer record of the day.** Primary Duka CTA; **Get setup help**.

## 9. Pesa, Mteja and Bandu product pages

These pages are complete information-request pages in their conservative launch state. No feature tab, pricing card or “Add to your account” button appears until its product registry entries are approved.

### 9.1 Pesa — `/products/pesa`

Kicker: **PESA · FINANCIAL RECORDS**  
H1: **Bring your money questions into focus.**  
Body: **Explore Pesa, Basepoint's finance product. Tell us which financial records and decisions you need to improve, and we'll confirm its current availability and fit.**  
CTA: **Ask about Pesa** → `/demo?product=pesa`.

H2: **Start with the question you need to answer.**  
Body: **Are you trying to understand money received, money spent or the records behind a business review? Describe your current process so we can discuss the relevant product scope.**

H2: **Confirm the fit before changing your process.**  
Body: **We'll discuss supported records, connections, access, setup and pricing. Existing accounting and reporting obligations still need the appropriate checks.**

FAQ: **Can Pesa connect to my bank or payment tools?** Tell us which tools you use. We'll confirm any supported connections.  
FAQ: **Is Pesa included with Duka?** Access and bundling depend on the approved offer. Ask us about your intended setup.

Final: **Tell us what you need to understand about your money.** → **Ask about Pesa**.

### 9.2 Mteja — `/products/mteja`

Kicker: **MTEJA · CUSTOMER RELATIONSHIPS**  
H1: **Give customer relationships a clearer place in your business.**  
Body: **Explore Mteja, Basepoint's customer product. Tell us how you keep customer records and manage follow-up, and we'll confirm its current availability and fit.**  
CTA: **Ask about Mteja** → `/demo?product=mteja`.

H2: **Start with the relationship you want to improve.**  
Body: **Describe how you recognise returning customers, keep contact information and decide who needs a follow-up. We'll discuss the relevant product scope.**

H2: **Use customer information with care.**  
Body: **Customer records and outreach require the right permissions. We'll confirm the supported workflow and what you need to prepare.**

FAQ: **Does Mteja send WhatsApp campaigns?** We'll confirm the supported channels and messaging requirements.  
FAQ: **Is loyalty included?** Ask us to confirm the available features for your intended use.

Final: **Tell us how you want to serve your customers better.** → **Ask about Mteja**.

### 9.3 Bandu — `/products/bandu`

Kicker: **BANDU · PEOPLE ADMINISTRATION**  
H1: **Make the work of managing people clearer.**  
Body: **Explore Bandu, Basepoint's people product. Tell us what your team needs to organise, and we'll confirm its current availability and fit.**  
CTA: **Ask about Bandu** → `/demo?product=bandu`.

H2: **Start with your team's everyday administration.**  
Body: **Describe how you maintain staff records and coordinate team responsibilities. We'll discuss the relevant product scope and setup.**

H2: **Confirm access and responsibilities.**  
Body: **People information needs appropriate access controls. We'll confirm the supported roles, records and permissions before setup.**

FAQ: **Does Bandu include payroll or shift tracking?** We'll confirm the available functions for your intended setup.  
FAQ: **Can each staff member have separate access?** We'll confirm the supported roles and account limits.

Final: **Tell us what your team needs to organise.** → **Ask about Bandu**.

### 9.4 Available-product state

Once confirmed, replace the introductory information-request paragraph with approved capability copy. Add three workflow sections, actual screenshots, supported prerequisites, approved pricing and product-specific FAQs. Use “Add to your account” only where that action actually provisions the product. Do not automatically apply a free Duka offer to another product.

## 10. Retailers — `/solutions/retailers`

**Public copy**

Kicker: **FOR RETAIL BUSINESSES**  
H1: **A clearer view of the shop, from the first sale to the daily review.**  
Body: **Start with Duka to record sales, track stock and issue receipts. Build a routine that gives you clearer records to work from.**  
Primary: applicable Duka CTA. Secondary: **Get setup help**.

H2: **Keep the essentials visible.**

- **What sold?** Use your recorded sales to review the day.
- **What's on the shelf?** Compare stock records with regular physical counts.
- **What should you check next?** Use the records to identify a question worth investigating.

H2: **Start with your current shop.**  
Body: **Tell us about your device, product range and existing records if you need setup help. You do not need to choose every Base product at once.**

H2: **Useful routines for the owner and the team.**  
Body: **Read the daily review and stock-count guides, then choose a routine you can maintain.**

FAQ: **Is this for a single shop?** Duka is the entry point for standard retail needs. Ask us about requirements for larger or more complex operations.  
FAQ: **Will it tell me my profit?** Sales records alone are not profit. Costs, expenses and other relevant records must be considered.

Final: **Make the next day's records easier to review.** Primary Duka CTA.

## 11. Distributors — `/solutions/distributors`

**Public copy**

Kicker: **FOR DISTRIBUTORS AND MANUFACTURERS**  
H1: **Start with the commercial question your network needs to answer.**  
Body: **Discuss how Basepoint could support visibility across your distribution operation. We'll review your workflows, data access and requirements before proposing a fit.**  
CTA: **Discuss your operation** → `/demo?segment=distributor`.

H2: **Where does visibility break down?**

- **Sales and movement.** Which records do you need to understand where products are moving?
- **Outlet coordination.** What information do teams need from the businesses they serve?
- **Commercial follow-through.** How do you turn observations into actions and review the result?

H2: **Begin with a bounded assessment.**  
Body: **Define the business question, the participating businesses and the records they can share with permission. Then agree which available tools, human support or future pilot could be relevant.**

H2: **Agree the evidence before the rollout.**  
Body: **A useful pilot needs a baseline, a clear workflow and a measure of success. We'll discuss those alongside scope, responsibilities and cost.**

FAQ: **Is a network portal available?** Availability and scope must be confirmed for your use case. This page does not promise a live portal.  
FAQ: **Can we see merchant data?** Only through an agreed, permissioned arrangement with appropriate access controls. A referral or partnership does not grant data access.  
FAQ: **Is Biashara AI part of the offer?** Biashara AI is in development and has a separate waitlist.

Final: **Bring one commercial question. Define a practical next step.** → **Discuss your operation**.

## 12. Growing operations — `/solutions/enterprise`

**Public copy**

Kicker: **FOR GROWING AND COMPLEX OPERATIONS**  
H1: **Make the next stage of your operation easier to understand.**  
Body: **More locations, more people and more tools create more setup decisions. Tell us what you need to coordinate, and we'll assess the available Base products and support options.**  
CTA: **Discuss your operation** → `/demo?segment=enterprise`.

H2: **Define what needs to work together.**

- **Locations.** Explain what each outlet needs to record and what management needs to review.
- **People.** Identify who needs access and who owns each decision.
- **Tools.** List the systems you rely on and any connection requirements.

H2: **Plan the setup before scaling it.**  
Body: **Agree the supported product scope, migration needs, training responsibilities and review criteria. Start with an appropriate rollout size and expand after the workflow has been evaluated.**

H2: **Know what is included.**  
Body: **Product access, implementation work, integrations and ongoing support are confirmed in the proposal. Any service commitments must be agreed explicitly.**

FAQs: **Can Base replace all our systems?** We'll assess the relevant workflows and confirm product fit.  
**Can we request integrations?** Yes, as part of discovery. Availability, effort and costs must be assessed.  
**Can we start with one location?** We can discuss a bounded setup or pilot appropriate to your needs.

Final: **Define the operation you want to build.** → **Discuss your operation**.

## 13. Hospitality — `/products/duka/hospitality`

**Public copy**

Kicker: **DUKA FOR HOSPITALITY · EARLY-ACCESS INTEREST**  
H1: **Help shape Duka for the way your hospitality business works.**  
Body: **We're developing a hospitality proposition for restaurants, cafés, bars and hotels. Register your interest and tell us which daily workflows matter most to you.**  
Primary: **Join early access**. Secondary: **Discuss your setup**.

Status note: **This is an interest registration. It does not provide immediate product access. Features, eligibility and pricing will be confirmed as development progresses.**

H2: **Which workflows should we prioritise?**  
Body: **We're considering table and order handling, kitchen or bar tickets, split bills, modifiers, staff permissions and connectivity requirements. These are proposed development areas, not available features.**

H2: **Tell us how your business actually runs.**  
Body: **The number of outlets, your busiest service period and the tools you use will help us understand the right requirements.**

Form: Name, email, business type, city, number of outlets, most important workflow; optional phone and separate permission to contact by phone/WhatsApp.

Confirmation: **Thanks for registering your interest. We'll contact you when there is relevant information about eligibility, features or access. Registration does not guarantee a place or a launch date.**

FAQ: **What will it cost?** Pricing is not yet confirmed.  
FAQ: **Will it work offline?** Connectivity requirements are being assessed.  
FAQ: **Can I use it now?** This page collects early-access interest. We will confirm when access is available.

Final: **Tell us what a useful hospitality setup needs to do.** → **Join early access**.

## 14. Biashara AI — `/solutions/biashara-ai`

### 14.1 Audience and commercial objective

Primary audience: organisations, distributors, business software providers and advisory or ecosystem partners. Business owners may register interest, but this page does not sell an available merchant assistant. The page qualifies useful decision scenarios and potential collaborators.

The selling approach is **decision → evidence → proposed action → human approval → review**. Do not begin with an architecture diagram, a generic chat window or a list of AI capabilities.

### 14.2 Hero

**Public copy**

Kicker: **BIASHARA AI · IN DEVELOPMENT**  
H1: **Turn business activity into better commercial decisions.**  
Body: **We're developing Biashara AI to help organisations interpret business signals, compare possible actions and review what happens next. The intended approach combines commercial evidence with human judgment.**  
CTA: **Join the waitlist**.

Status line: **Biashara AI is in development. The scenarios below illustrate intended uses, not live capabilities. Access, integrations, pricing and launch timing are not confirmed.**

### 14.3 The problem

H2: **Information is useful when it helps someone decide what to do.**  
Body: **A report can show that something changed. The next questions are harder: What caused it? What should we try? Who needs to act? How will we know whether it worked? Biashara AI is being designed around that sequence.**

### 14.4 Proposed scenarios

H2: **Start with a decision worth improving.**

| Scenario card | Public question | Public concept description |
| --- | --- | --- |
| Stock planning | What should we reorder, and why? | A proposed scenario would bring sales, stock and supplier information together to compare reorder options. |
| Commercial testing | Is this promotion worth testing? | A proposed scenario would make assumptions explicit and outline a test with a measurable result. |
| Distribution focus | Where should the team focus next? | A proposed scenario would compare available market and outlet signals to identify opportunities for review. |
| Coordinated action | Who needs to do what next? | A proposed scenario would turn an approved decision into suggested responsibilities and follow-up checks. |

Card footer on each: **Proposed scenario — subject to development and validation.**

### 14.5 Concept walkthrough

H2: **One question. A visible chain of reasoning.**

Label: **ILLUSTRATIVE CONCEPT — NOT A LIVE PRODUCT**

Intro: **Consider a distributor asking whether to replenish an outlet before the next delivery. This example shows the intended decision process using fictional information.**

1. **Bring the evidence.** Sample sales records, a checked stock count and a supplier lead time provide the starting information.
2. **Check the gaps.** Missing records or an outdated stock count must be identified before relying on a recommendation.
3. **Compare options.** The proposed system would show possible actions and the assumptions behind them.
4. **Keep approval with people.** The responsible manager would approve, change or reject the suggested action.
5. **Review the result.** The team would compare the outcome with its original expectation and update the next decision.

Closing line: **The aim is a more accountable decision process. Results will need to be tested in real workflows.**

Use five compact panels. No invented probability, accuracy score, completed order, guaranteed savings or autonomous purchasing animation.

### 14.6 Goal, action and review

H2: **A recommendation should connect to a goal and a review.**  
Body: **We intend to link proposed actions to an agreed business goal, the resources available and a way to assess the result. A useful recommendation should explain what it depends on and leave room for human judgment.**

Cards:

- **Define the goal.** Name the decision and the outcome you want to evaluate.
- **Make the action practical.** Consider the time, money and people available.
- **Review the evidence.** Compare the result with the expectation and investigate differences.

### 14.7 Capability framework

H2: **What we're working toward.**

- **Market sensing.** We intend to explore how relevant market signals could inform commercial decisions.
- **Hypothesis testing.** We intend to help teams structure assumptions and evaluate tests.
- **Supply-chain decisions.** We intend to explore decisions about goods, cash and information using permitted data.
- **Execution coordination.** We intend to connect approved decisions with responsibilities and review steps.
- **Learning from outcomes.** We intend to use evaluated results to improve subsequent recommendations.

### 14.8 Audience sections

H2: **Help define a useful commercial workflow.**

- **Enterprises and distributors.** Bring a recurring decision that would benefit from better evidence and follow-through.
- **Business software providers.** Explore how decision support could fit alongside the workflows your users already rely on.
- **Advisory and ecosystem organisations.** Help identify practical scenarios, evaluation criteria and responsible support needs.

No API, SDK, integration catalogue or partner badge appears unless actually available and documented.

### 14.9 Trust and human control

H2: **Designed to support judgment.**  
Body: **Our intended approach keeps recommendations open to review and decisions under human control. Data sources, permissions, limitations and evaluation methods will need to be defined for each future pilot.**

Do not claim completed security certifications, model accuracy, training-data exclusion or tenant isolation without approved technical and legal evidence. A waitlist does not authorise business-data ingestion.

### 14.10 Waitlist

H2: **Tell us which decision you want to improve.**

Required fields: Name, email, organisation, organisation type, primary interest, decision/problem description. Organisation may be “Independent” for individual registrants.

Organisation types: Business/enterprise, distributor/manufacturer, software provider, advisory/ecosystem organisation, independent business owner, other.

Interest choices: Product updates, potential future pilot, potential integration/partnership.

Optional fields: Industry, current tools or data-source categories, city/country. Do not collect raw operational records, customer details, credentials or data uploads.

Submit: **Join the waitlist**.

Service notice: **We'll use these details to respond to your interest and share relevant Biashara AI updates. See our Privacy Policy. Registration does not guarantee access or a launch date.**

General Basepoint marketing opt-in is separate, optional and unchecked.

Confirmation: **You're on the Biashara AI waitlist. We'll share relevant updates and may contact you to understand your proposed use case. Access and timing are not yet confirmed.**

### 14.11 FAQs and final banner

**Can I use Biashara AI today?** No. It is in development. This page collects interest and proposed use cases.

**Will it run my business for me?** The intended approach supports human decision-making. Proposed actions would remain subject to review and approval.

**Does it work with Duka or other software?** Connections are not yet confirmed. Tell us which workflow and tools matter to your organisation.

**Will I need to share business data?** Any future pilot would define required data and permissions separately. Joining the waitlist does not require operational data.

**What will it cost?** Pricing is not confirmed.

**When will it launch?** There is no confirmed public launch date.

Final banner: **Bring a real decision. Help shape useful intelligence.** → **Join the waitlist**.

## 15. Base Collabs — `/collabs`

**Public copy**

Kicker: **BASE COLLABS**  
H1: **Help businesses work better. Build your own opportunity.**  
Body: **Base Collabs brings independent experts, advisors and resellers into Basepoint's network. Help businesses understand Base, support adoption within your role and refer opportunities through an agreed process.**  
CTA: **Become a Collab** → `/collabs/apply`.

H2: **Who is it for?**

- **Experts and advisors.** People who help businesses improve how they work.
- **Resellers and onboarding partners.** People who can introduce Base and support an agreed setup process.
- **Champions and referrers.** People with trusted business relationships and relevant introductions.

H2: **Give clients a practical next step.**  
Body: **Help a business identify a need, understand the relevant product and choose how to begin. Your role, training and service boundaries are agreed before participation.**

H2: **How the relationship works.**

1. **Apply.** Tell us about your work, territory and the businesses you serve.
2. **Agree your role.** Confirm product scope, enablement, conduct and commercial terms.
3. **Introduce and support.** Use agreed materials and attributable links. Escalate needs outside your scope.
4. **Review outcomes.** Follow the agreed process for adoption, feedback and eligible referrals.

H2: **Know the terms before you commit.**  
Body: **Commission, referral eligibility, payout timing and any onboarding responsibilities are confirmed in your agreement. An application is not approval and does not guarantee earnings.**

H2: **Practical knowledge travels further.**  
Body: **Use Basepoint Learn to explain everyday business routines. Share a relevant guide, discuss the business need and introduce the appropriate next step.**  
CTA: **Explore Learn**.

FAQs: **Must every client book a demo?** No. A standard retail business can use the available start path. Complex needs or requested assistance follow the help path.  
**Is the network operated through WhatsApp?** Approved members may use WhatsApp for coordination. Applications and attribution use structured records.  
**Are commissions published here?** Your applicable commercial terms are confirmed before participation.  
**Will I receive a certification?** No certification is promised by applying. Any future credential requires defined assessment and conduct standards.

Final banner: **Bring your expertise. Help a business take its next step.** → **Become a Collab**.

### 15.1 Application — `/collabs/apply`

H1: **Tell us how you help businesses.**  
Body: **Share your experience, the businesses you serve and how you would like to work with Basepoint.**

Fields: Name, email, role interest, city/territory, industries served, relevant experience, approximate existing business network as a range; optional organisation, website and phone. Ask separately for phone/WhatsApp contact permission.

Submit: **Send application**.  
Confirmation: **We've received your application. We'll review the fit and contact you about the next step. Submission does not confirm membership or commercial terms.**

Do not expose a raw WhatsApp community invite. Accepted members receive an intentional onboarding handoff.

## 16. Referrals — `/refer`

Publish the transaction form only when eligibility, attribution and handling are operational. Otherwise hide the referral navigation entry; `/refer` may show the explanatory state below.

**Public copy**

H1: **Know a business that needs clearer records?**  
Body: **Introduce Basepoint through a relevant product page or an approved referral link. A clear introduction helps the business choose its own next step.**

Operational state H2: **How approved referrals work.**

1. **Use your assigned link.** It connects the introduction with your referrer record.
2. **Let the business choose.** The owner can start directly or request help.
3. **Follow the agreed terms.** Any reward depends on the eligibility and qualifying event in your referral agreement.

CTA: **Refer a business**. Secondary: **See referral terms**.

Restricted state body: **Structured referral registration is not currently open. Contact Basepoint to discuss an introduction.** CTA: **Discuss an introduction** → `/contact?intent=referral`.

FAQs: **Does a signup qualify for a reward?** Not automatically. The referral terms define the qualifying event.  
**Can I submit someone else's phone number?** Only with their permission for the proposed contact. Prefer sharing your referral link so they can submit their own details.  
**What if the business already has an account?** Eligibility depends on the referral terms and duplicate checks.

### 16.1 Referral terms content contract

Legal/Finance must supply approved raw terms before rewards are advertised. Required clauses: eligibility, geographic scope, commission or reward calculation, applicable tax, qualifying event, attribution window, existing leads, duplicate handling, self-referral prohibition, refund/cancellation treatment, payout timing, minimum payout if any, dispute route, changes and contact.

Do not insert invented numbers. Where no incentive is approved, the website may support introductions without advertising a reward.

## 17. Strategic partnerships — `/partners`

**Public copy**

Kicker: **PARTNERSHIPS**  
H1: **Build useful business workflows with Basepoint.**  
Body: **We welcome conversations with organisations that can improve business support, product fit or distribution. Start with the problem you want to solve and the value each organisation can contribute.**  
CTA: **Explore a partnership** → `/partners/apply`.

H2: **Three ways to begin a conversation.**

- **Distribution and adoption.** Explore how your network could introduce businesses to relevant Base products.
- **Business support.** Explore a bounded collaboration around practical expertise and adoption.
- **Product and intelligence.** Discuss workflow requirements, possible integrations or future Biashara AI scenarios.

H2: **Define value on both sides.**  
Body: **A useful partnership has a clear audience, responsibilities, scope and a way to evaluate the result. Commercial terms, data access and delivery commitments are agreed separately.**

H2: **Looking to join as an individual expert or reseller?**  
Body: **Base Collabs is the entry point for individual experts, advisors and resellers.**  
CTA: **Explore Base Collabs**.

FAQ: **Does partnership provide access to merchant data?** No. Access requires a separate agreed and permissioned arrangement.  
FAQ: **Do you have a live integration programme?** Available integrations and programme scope must be confirmed for the proposed use case.

### 17.1 Enquiry — `/partners/apply`

H1: **Describe the partnership you have in mind.**  
Body: **Tell us who you serve, the problem you want to address and how you would like to work with Basepoint.**

Fields: Name, work email, organisation, organisation type, city/country, partnership area, proposed problem/value, optional website and network size range.

Submit: **Send partnership enquiry**.  
Confirmation: **We've received your enquiry. We'll review the proposed fit and contact you about the next step. No partnership, integration or data access is confirmed by submission.**

## 18. Pricing — `/pricing`

**Public copy**

H1: **Start with the job you need to do.**  
Body: **Choose a Duka starting point or discuss a more complex setup. Confirm product access, support and costs before you commit.**

Card A: **Duka for everyday retail.**  
Body: **Sales recording, stock tracking and receipts.**  
CTA: applicable Duka CTA.

Card B: **A more complex operation.**  
Body: **Discuss multiple locations, implementation needs or custom requirements. We'll confirm scope before providing a proposal.**  
CTA: **Discuss your setup**.

Approved-price state: show currency and billing interval together, total annual charge where relevant, taxes, limits, setup fees, trial terms and cancellation route. Only show a bundle saving when the underlying standalone offers and calculation are approved.

Price-unconfirmed state: **“Contact us to confirm current Duka pricing and the offer available for your setup.”** Do not display a free CTA or checkout until the corresponding offer is approved. Account creation without a free promise may still be offered where it carries no undisclosed charge and clearly states access limitations.

H2: **Interested in another Base product?**  
Body: **Ask about Pesa, Mteja or Bandu to confirm availability, scope and pricing.** Links to product pages.

FAQs:

**What does the starting offer include?** The offer card lists the approved product access and limits. Ask us before starting if any requirement is unclear.

**Is setup help included?** Assistance, scope and fees are confirmed separately unless the offer explicitly includes them.

**Does starting an account mean my business is fully set up?** No. Account creation and completing your first useful workflow are separate steps.

**Can I add products later?** Availability and access depend on the product and offer. Ask about the next product when you have a clear need.

**Is Biashara AI included?** No. Biashara AI is in development and has a separate waitlist.

**How do I cancel?** Approved offers must show their cancellation process and applicable terms before purchase.

## 19. Basepoint Learn — `/resources`

**Public copy**

Kicker: **BASEPOINT LEARN**  
H1: **Practical habits for a clearer business.**  
Body: **Use simple guides to review the day, count stock and prepare for your next stage. Choose one useful action, then check what changed.**

H2: **Start with a question from your working day.**

- **Run:** Sales records, stock and daily routines.
- **Money:** Financial records and questions worth investigating.
- **Grow:** Readiness, expansion and operating capacity.
- **Customers:** Responsible records and follow-up practices.
- **Industry:** Guidance for relevant business workflows.

Primary content is useful without a compulsory signup. Show one contextual product CTA per article. Supporting share/download actions are visually subordinate. Do not publish blank category results.

Article requirements: descriptive title, summary, author/reviewer, publication/review date, practical steps, limitations, one action to try, one review question, contextual CTA and compressed WhatsApp preview.

Legal, tax or regulatory content requires current official-source verification and a responsible reviewer. Do not launch an eTIMS guide without that review.

### 19.1 Guide — `/resources/daily-close`

**Title:** A simple daily review for your shop  
**Summary:** Take a few minutes to check the day's records and choose what needs attention tomorrow.

**Public article copy**

A daily review is a check on your records. It helps you notice gaps while the day is still fresh. It does not replace accounting or prove that every payment has settled.

**1. Review recorded sales.** Check the date and look for missing or duplicated entries. Investigate returns, corrections or unusual transactions.

**2. Separate the payment channels.** Compare the relevant sales records with cash, confirmed mobile-money receipts and other payment records. Keep unpaid sales distinct from money received.

**3. Check differences.** Note withdrawals, refunds, expenses or opening cash where they affect the comparison. Do not change records just to force a match. Investigate unexplained differences.

**4. Note stock questions.** Identify items that need a physical count or another check. Sales records are one part of the stock picture.

**5. Choose tomorrow's first task.** Write down one action, who will do it and when you will review it.

**Try today:** Record one discrepancy or missing entry and investigate its cause.  
**Review tomorrow:** Was it resolved, and what would prevent it recurring?

**Duka connection:** Duka can provide recorded sales and stock information for your review. Confirm the reports and payment features available in your setup.  
CTA: **Explore Duka**. Share label: **Share this guide**.

### 19.2 Guide — `/resources/stock-count`

**Title:** Make a stock count useful  
**Summary:** Count consistently, investigate differences and leave a record someone else can understand.

**Public article copy**

A stock count checks what is physically present against your records. Differences are questions to investigate, not automatic evidence of theft or loss.

**1. Choose a manageable scope.** Start with a shelf, category or small group of products. Decide the counting time and how sales or deliveries during the count will be handled.

**2. Use clear product names and units.** Avoid mixing boxes, packs and individual items in the same quantity field.

**3. Record the physical quantity.** Count carefully and recount unexpected results. Note damaged or unsellable items separately.

**4. Compare with the recorded quantity.** Check recent sales, receipts, returns and adjustments before deciding why a difference exists.

**5. Record the resolution.** Keep the date, person responsible and explanation for an approved correction.

**Try today:** Count five important products using consistent units.  
**Review next time:** Did the same difference recur?

Suggested worksheet columns: Date, product, unit, recorded quantity, physical quantity, difference, explanation, approved correction, reviewer.

**Duka connection:** Use the stock records supported in your setup as one side of the comparison.  
CTA: **Explore Duka**. Share label: **Share this guide**.

### 19.3 Guide — `/resources/second-outlet`

**Title:** Questions to answer before opening a second outlet  
**Summary:** Check whether your records, people and routines can support another location.

**Public article copy**

A second outlet adds another place where stock, money and decisions need attention. Start by checking whether the current operation can be explained and repeated.

**Records:** Can you distinguish sales, stock and expenses for the existing outlet? What would need to be recorded separately at a new location?

**People:** Who will manage the outlet, who can make decisions and who reviews exceptions?

**Stock:** How will deliveries and transfers be recorded? Who approves movements between locations?

**Money:** What are the setup and ongoing costs? How will you review cash received, expenses and unpaid sales by location?

**Routine:** Which daily checks are dependable today? Which still rely on the owner remembering every detail?

**Try this week:** Document one existing operating routine and ask another responsible person to follow it.  
**Review:** Where did they need clarification?

This guide is a readiness discussion, not a financial forecast or recommendation to expand.

CTA: **Discuss your setup**. Share label: **Share this guide**.

### 19.4 Optional margin calculator

Title: **Check an item's gross margin.**  
Inputs: selling price and purchase cost per consistent unit, in KES. State that inputs must use the same tax basis. Output gross profit per unit = selling price minus purchase cost; gross margin = gross profit divided by selling price; markup = gross profit divided by purchase cost. Label each separately. Do not calculate division by zero; show “Enter a value above zero” for the relevant denominator. Allow loss-making results. Exclude expenses explicitly.

Public note: **This calculation uses the values you enter. Gross margin is not net profit and does not account for all business costs.**

No input leaves the browser by default. Do not describe the calculator as Biashara AI. Verify rounding, zero values and negative margin before launch.

### 19.5 Collab distribution panel

Optional collapsed panel: **“Explaining this to a business owner?”**

Raw 30-second explanation: **“Base helps a business get clearer records. Duka starts with sales, stock and receipts. Choose one daily routine, review the records and use the right help when you need it.”**

Offer shareable teaching notes and approved referral links. Download buttons appear only when a real file exists. Generate one-page guide cards as separate production assets, using the article as the authoritative source.

## 20. Company — `/company`

**Public copy**

H1: **We're building Base to make business activity clearer.**  
Body: **Basepoint Cloud Technologies is building business software and practical support around the needs of everyday operations. Our starting point is simple: clearer records make it easier to ask better questions and take the next step.**

H2: **Our standard is practical.**

- **Speed.** Move a useful task forward with a clear next step.
- **Efficiency.** Focus on the work that matters to the business.
- **Frugality.** Make responsible use of time, money and tools.
- **Accountability.** Be clear about commitments and review what happened.

H2: **Tools, knowledge and relationships.**  
Body: **Base is the product ecosystem. Basepoint Learn provides practical guidance. Base Collabs brings experts, advisors and resellers into the network. Biashara AI represents the commercial intelligence concepts we are developing.**

CTA: **Explore Base**. Secondary: **Contact Basepoint**.

Publish only verified team names, roles, biographies and portraits. Do not create fictional staff, customer quotes, institutional endorsements or office locations.

Legal footer naming must be reviewed against the registered entity and trading-name position. Candidate subject to legal confirmation: **“Basepoint Cloud Technologies is a trading name of Relia Technologies.”** Do not expand the legal name or registration details without verification.

## 21. Contact, forms and onboarding

### 21.1 Contact — `/contact`

H1: **Tell us what you need help with.**  
Body: **Choose a product question, setup request, partnership enquiry or support issue so we can direct your message.**

Display verified contact channels only. Do not publish unverified opening hours or response guarantees. Product-support requests use the support route; they do not count as sales leads.

Form fields: Name, email, enquiry category, message; optional phone, business and existing account reference. Never ask for a password or payment credential.

Submit: **Send message**. Confirmation: **Your message has been received. We'll direct it to the relevant team.**

### 21.2 Assisted intake — `/demo`

H1: **Tell us about your setup.**  
Body: **Help us understand your business and what you want to change. We'll use this to discuss the right next step.**

Required: Name, email or verified contact method, business type, number of locations, need description. Optional: Business name, city, current tools, preferred contact method and phone. Progressive questions may ask about migration or integration after the core fields.

Submit: **Request a conversation**.  
Confirmation: **We've received your request. We'll review your needs and contact you through the method you selected.**

Do not call submission a booked meeting. Use “Book a demo” only where the visitor can actually select and confirm a demo appointment.

### 21.3 Duka start — `/start`

Provisioning state:

H1: **Start with Duka.**  
Body: **Create your account to begin setting up your sales, stock and receipts.**  
Submit: **Create account**.

Approved free-offer state adds the verified duration, limits and payment terms near the form. Never use “No card required” without verification.

Account fields are the minimum required by auth and tenant creation. Gather nonessential profile details progressively. Support login for returning users and prevent duplicate account creation.

Unavailable-provisioning state:

H1: **Request Duka access.**  
Body: **Direct account creation is not currently available here. Leave your details so we can confirm the next step for your setup.**  
Fields: Name, email/contact method, business type; optional setup note.  
Submit: **Request access**.  
Confirmation: **We've received your access request. This has not created a Duka account. We'll contact you about the next step.**

Do not record this fallback as `signup_completed`.

### 21.4 Shared form behaviour

- Persistent labels, clear field requirements, correct input types and autocomplete.
- Inline errors plus an accessible summary. Preserve entered values on failure.
- Submit only once; show an in-progress state and prevent duplicate writes.
- Success only after durable server acceptance. A failed CRM write must retry from a durable queue or show a truthful pending state.
- Separate operational contact notices from optional general-marketing consent.
- Phone/WhatsApp permissions are explicit when applicable; no unchecked assumption of consent.
- No sensitive merchant or referral details in public URLs.
- Server-side validation, basic anti-spam controls and rate limits.
- No raw form text, email, phone or financial data in analytics events.
- Low-connectivity forms retain entries in memory. Avoid storing contact data in persistent browser storage by default. No background submission of stored personal data without an approved consent and retention design.

## 22. Technical architecture and data contracts

### 22.1 Application boundaries

Engineering records the marketing/CMS, auth, product app, provisioning, CRM and referral-service boundaries. `/start` must preserve permitted attribution through cross-domain handoff. Use server-owned opaque session references where needed; do not expose sensitive state in query strings.

Marketing can edit articles and approved copy without a deployment. Product-status fields and offer records control conditional blocks. Preview must show the exact launch state. Critical claims and pricing edits require the relevant owner's review.

### 22.2 Provisioning checklist

Confirm authentication, contact verification, tenant creation, owner creation, plan/trial assignment, product provisioning, required business checks, first-workflow checklist, CRM upsert, error recovery and abandoned-account handling.

Account creation is successful only when the documented account-creation contract completes. Emit `account_provisioned` separately when a usable workspace exists. Define a product-specific activation event; do not count a form fill, login or demo as merchant activation.

### 22.3 Acquisition vocabulary

Keep journey, conversion motion and source separate.

| Field | Values or rule |
| --- | --- |
| `journey_type` | merchant, collab_application, referral_introduction, strategic_partnership, ai_waitlist, hospitality_interest, support |
| `entry_motion` | self_serve, assisted, interest_registration, application |
| `conversion_motion` | self_serve, assisted; set only on relevant merchant conversion |
| `acquisition_channel` | organic, paid_social, paid_search, field_event, partner, referral, direct, unknown |
| `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` | Sanitised observed parameters; never invent attribution |
| `first_touch_source`, `last_touch_source` | Keep both; explicit overwrite rules |
| `landing_page` | Initial landing route |
| `referral_code`, `collab_id`, `partner_id` | Validated opaque identifiers; phone is not an ID |
| `geo`, `zone` | Volunteered or operationally confirmed territory; no covert precise location |
| `assisted_sales_required`, `assisted_sales_reason` | Explicit escalation state and reason |
| `signup_at`, `provisioned_at`, `activated_at`, `first_value_at` | Distinct server timestamps |
| `modules_active` | Verified product activity, not merely product interest |
| `consent_record` | Purpose, state, text identifier, timestamp and collection source |

A referred merchant may still convert self-serve. Preserve original entry motion when a visitor later asks for help; record the eventual conversion motion separately.

### 22.4 Events

| Event | Meaning |
| --- | --- |
| `website_visit` | Permitted page/session observation |
| `cta_start_clicked`, `cta_help_clicked` | Intent only |
| `signup_started`, `signup_completed` | Real account-creation steps |
| `account_provisioned` | Usable product workspace created |
| `merchant_activated` | Product-approved meaningful-use event |
| `first_value_reached` | Explicit value milestone, independently defined |
| `conversation_requested`, `meeting_booked`, `demo_completed` | Separate assisted steps |
| `assisted_onboarding_started`, `assisted_onboarding_completed` | Documented onboarding steps |
| `module_added`, `second_module_activated` | Entitlement and meaningful use, separately |
| `referral_link_opened`, `referral_registered`, `referral_reward_qualified` | Separate referral steps |
| `collab_application_submitted`, `collab_approved` | Application and acceptance |
| `partnership_enquiry_submitted` | Strategic enquiry |
| `ai_waitlist_submitted`, `hospitality_interest_submitted` | Interest registrations, not customers |
| `resource_viewed`, `resource_shared`, `resource_downloaded` | Observed learning interactions |

Include stable event ID, timestamp, route, permitted source context and pseudonymous correlation IDs. Server events are authoritative for account creation, activation and rewards. Make webhook consumers idempotent and test retries. A WhatsApp share click indicates intent to share, not proven delivery.

### 22.5 Referral rules

Assigned links may use `/start?ref=COLLAB-047&utm_source=collabs&utm_medium=referral&utm_campaign=duka_intro` as an illustrative format, not a real code.

Validate referrer ownership server-side. Persist context through auth, provisioning and activation. Define attribution window, overwrite conflicts and consent-dependent retention in the approved programme terms.

Check duplicate contacts/accounts, existing leads, self-referrals and disputed ownership. Qualify rewards using the approved activation or paid-period event. Record reward states: pending, eligible, approved, paid, rejected, disputed. Finance approval precedes payout.

Referrers see only information they are permitted to access. Shared links must never expose merchant status or contact details. Manual dispute review must retain an audit trail.

### 22.6 CRM and operations

Use CRM upserts keyed by stable contact/account IDs. Keep product support separate from acquisition reporting. Forms produce an owned task, not an unassigned inbox item. The receiving team must define triage, response ownership and escalation; publish response promises only when supported.

WhatsApp coordinates approved relationships; CRM stores consent, attribution, opportunity status and outcomes. Do not depend on chat history as the sole referral record.

### 22.7 Feature flags and rollback

Flags control signup provisioning, approved free offers, product capability blocks, referral rewards, Hospitality interest, Biashara AI concept changes and deferred directory/Academy functions. Rollback preserves durable submissions and attribution. Failed account provisioning must offer a recovery route without producing duplicate tenants or false activation events.

## 23. Performance, accessibility and search

### 23.1 Mobile and data budgets

- Landing pages: under 1.5 MB initial transferred page assets on a cold load. Rich product pages: under 3 MB total transferred assets for a full page view. Measure third-party assets too.
- No autoplay video. Optional video loads after explicit play.
- Use responsive AVIF/WebP product images, appropriate dimensions and lazy loading below the fold. Do not lazy-load the primary hero image.
- Minimise scripts and font variants. Reserve image dimensions to prevent layout shift.
- Test core pages and forms on throttled 3G, a narrow viewport and a representative low-end mobile device profile.
- Target mobile LCP ≤2.5 s, INP ≤200 ms and CLS ≤0.1 at the 75th percentile when sufficient field data exists. Record launch lab results separately; do not represent lab results as field data.

### 23.2 Accessibility

Target WCAG 2.2 AA. Use semantic headings, labelled inputs, visible focus, keyboard-accessible menus/accordions, adequate contrast, readable text and reduced-motion support. Meaningful screenshots have alt text; decorative images have empty alt text. Status is communicated through text, not colour alone.

### 23.3 Metadata

| Route | Title | Description |
| --- | --- | --- |
| `/` | Basepoint \| Sales, Stock and Business Clarity | Start with Duka for sales, stock and receipts. Explore Base products, practical guides and setup support for your business. |
| `/products/duka` | Duka \| Sales, Stock and Receipts \| Basepoint | Explore Duka for recording sales, tracking inventory and issuing receipts. Confirm pricing and the setup suited to your retail business. |
| `/platform` | Base \| Explore the Product Ecosystem | Start with Duka and explore Pesa, Mteja and Bandu. Check current product availability and discuss the setup your business needs. |
| `/solutions/biashara-ai` | Biashara AI \| Commercial Intelligence in Development | Explore Biashara AI's proposed decision-support scenarios and join the waitlist. Access, integrations and launch timing are not confirmed. |
| `/collabs` | Base Collabs \| Experts, Advisors and Resellers | Apply to Base Collabs to introduce relevant products, support adoption within your role and develop business opportunities. |
| `/resources` | Basepoint Learn \| Practical Business Guides | Practical guides for daily reviews, stock counts and preparing for another outlet. Choose one useful action and review what changed. |
| `/pricing` | Basepoint Pricing \| Duka and Setup Options | Confirm the current Duka offer or discuss a more complex operation. Review product access, support scope and pricing before starting. |

Other pages receive unique titles and accurate descriptions following their raw copy. Use one canonical URL per page, indexable article HTML, XML sitemap and relevant internal links. Do not index private onboarding, account, confirmation or application-processing pages. Do not publish empty FAQ structured data or unverified ratings.

Every public page needs a compressed Open Graph image, title and description readable in a WhatsApp preview. Resource sharing preserves valid referral context where applicable; never include contact data. Use descriptive URLs and natural task language. Keyword research informs additional content; no ranking or zero-CAC guarantee.

### 23.4 URL integrity

Engineering maintains a route register with public URL, content purpose, indexability, canonical destination and owner. Public links must resolve directly to the intended page. Alternate aliases use a permanent redirect only where content intent is equivalent. Unavailable routes need a truthful response and a useful next step. Test for loops, chains, inconsistent canonicals and broken destinations. Do not publish empty or unready routes in navigation or the sitemap.

## 24. Measurement and commercial discipline

Website reports separate visits, interest, account creation, provisioning, activation, meaningful use and paid conversion. Report self-serve and assisted results with source attribution; do not combine unlike denominators.

Core measures:

- Duka CTA → signup → provisioning → activation conversion.
- Assisted request → meeting → assessed fit → onboarding → activation.
- Activation rate and time to the first agreed value event.
- Resource engagement and attributed downstream activation.
- Referred-account activation and approved reward cost.
- Product expansion measured through actual second-product use.
- Biashara AI waitlist qualification by decision scenario and organisation type.
- Hospitality interest by workflow need and eligibility.

Track costs of content, software, commissions and human support. Marginal distribution cost is not fully loaded acquisition cost. Model assumptions are internal and do not become website claims. Expansion goals and growth targets are operational objectives, not achieved scale.

Biashara AI success at this stage means learning which recurring decisions, data conditions and collaborators are worth evaluating. Waitlist volume alone is not evidence of product effectiveness.

## 25. Ownership and publication decisions

| Workstream | Accountable | Responsible | Consulted |
| --- | --- | --- | --- |
| Architecture and performance | Michael Kamau / CTO | Engineering | Design, Marketing |
| Provisioning and capability registry | CTO / Product | Engineering, Product | Growth Ops |
| Page copy and conversion presentation | Marketing/Growth | Content, Design | Product |
| Product claims and status | Product | Product, Marketing | CTO |
| Biashara AI scenarios and pilot language | Product/Roadmap owner | Product, Marketing | CTO, potential evaluation partners |
| Learn content | Marketing | Content | Product; qualified reviewer for regulated subjects |
| Analytics and CRM | Growth Ops | Engineering, CRM owner | Finance, Sales |
| Collab operations | Growth | Network administrators | Sales, Product |
| Offers and referral economics | Founder/Finance | Finance | Growth, Legal |
| Consent, legal terms and data sharing | Legal/Privacy owner | Legal, Engineering | Growth |
| Proof and permissions | Founder/BD | Marketing | Legal, customer relationship owner |

Open facts and safe defaults:

| Decision | Owner | Default until resolved |
| --- | --- | --- |
| Duka free offer and plan limits | Finance/Product | No “free” claim |
| Direct Duka provisioning | CTO/Product | Explicit request-access form |
| Add-on capabilities and availability | Product | Conservative information-request pages |
| Hospitality release scope | Product | Interest registration, proposed features only |
| Biashara AI integrations and pilot access | Product/CTO | Concept and waitlist only |
| Expert-support capacity and pricing | Growth/Finance | Request discussion; no guaranteed introduction |
| Referral eligibility and rewards | Finance/Legal | No reward advertisement or payout |
| Customer proof | Founder/BD | Omit proof module |
| Legal entity wording and public contacts | Legal/Operations | Resolve before publication of those fields |

## 26. Delivery order and acceptance

### 26.1 Delivery order

1. Confirm Duka product truth, legal contacts, account-creation state and offer state.
2. Implement shared navigation, conditional CTAs, forms, consent, attribution and CRM routing.
3. Publish Home, Duka, Retailers, Pricing, Start, assisted intake, Company and Contact in the correct states.
4. Publish Learn with the three complete guides and verified product documentation link.
5. Publish Platform and conservative Pesa/Mteja/Bandu information pages.
6. Publish Base Collabs applications and strategic partnership enquiries; enable referrals only when rules and tracking are ready.
7. Publish Biashara AI concept/waitlist and Hospitality interest pages independently when their forms and status labelling pass checks.
8. Publish complex-operation pages with accurate discovery scope. Add richer portals, credentials and dashboards only when the service exists and demand justifies it.

### 26.2 Launch acceptance checklist

- [ ] Every published route has its actual raw copy, metadata, owner and correct destination.
- [ ] No unverified capability, offer, customer result, endorsement or launch date appears.
- [ ] Duka CTAs match provisioning and offer states. A request is never described as an account.
- [ ] Biashara AI has only a waitlist conversion action, explicit development status and labelled concept examples.
- [ ] Hospitality does not present proposed functionality as usable today.
- [ ] Add-on products have independent capability and offer approval.
- [ ] Product screens use verified UI and the correct data caption.
- [ ] Self-serve, assisted, applications, support and waitlists produce distinct CRM records/events.
- [ ] Attribution survives relevant auth/provisioning handoffs and approved WhatsApp forwarding.
- [ ] Referral source does not force assisted onboarding.
- [ ] Referral rules, duplicate handling, reward gates and dispute ownership are defined before rewards launch.
- [ ] Forms handle validation, duplicates, interruption and server/CRM failures truthfully.
- [ ] Server conversion events are idempotent and do not contain raw personal data.
- [ ] Contact permissions, privacy notices, legal pages and analytics consent behaviour are reviewed.
- [ ] At least three substantive Learn guides are published; no empty categories or unavailable downloads are linked.
- [ ] Mobile, accessibility, keyboard and low-connectivity checks pass.
- [ ] Page-weight and launch performance results are recorded.
- [ ] Public pages have working WhatsApp previews and unique accurate metadata.
- [ ] Route availability, redirects, canonicals and internal links are tested.
- [ ] Marketing can maintain content; Product and Finance can control governed blocks.
- [ ] Receiving teams own submissions and escalation.
- [ ] Rollback preserves records and does not duplicate accounts or referrals.

**Required visitor outcome:** understand the relevant product, see its real status, choose the appropriate next step and receive an honest confirmation.
