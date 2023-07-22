export type ButtonProps = {
  variants: 'primary' | 'secondary';
  size?: 'xs' | 'md';
  outlined?: boolean;
  loading?: boolean;
  children: React.ReactNode;
} & JSX.IntrinsicElements['button'];
