import {
  CalculatorOutlined,
  ShopOutlined,
  StarOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import React, { ReactNode } from 'react';

import { Accent, ArrowLink, CardGrid, StatusBadge } from '@/components/Page';
import { PRODUCTS } from '@/constants/site';

const STYLE: Record<string, { icon: ReactNode; accent: Accent }> = {
  Duka: { icon: <ShopOutlined />, accent: 'orange' },
  Pesa: { icon: <CalculatorOutlined />, accent: 'mint' },
  Mteja: { icon: <StarOutlined />, accent: 'cyan' },
  Bandu: { icon: <TeamOutlined />, accent: 'electric' },
};

/** Base product cards in the ecosystem style, each with its real status. */
const ProductCards: React.FC<{ bodies?: Record<string, string> }> = ({
  bodies,
}) => (
  <CardGrid
    columns={4}
    items={PRODUCTS.map((product) => ({
      icon: STYLE[product.name].icon,
      accent: STYLE[product.name].accent,
      badge: product.status && <StatusBadge status={product.status} />,
      title: bodies ? `${product.name} — ${product.descriptor}` : product.name,
      body: bodies?.[product.name] ?? product.descriptor,
      footer: (
        <ArrowLink to={product.href} accent={STYLE[product.name].accent}>
          Explore {product.name}
        </ArrowLink>
      ),
    }))}
  />
);

export default ProductCards;
