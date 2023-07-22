export type TextAreaProps = {
    variants: 'primary' | 'secondary';
    size: 'xs' | 'sm' | 'md' | 'lg';
    bordered: boolean;
    ghost: boolean;
  } & JSX.IntrinsicElements['textarea'];
