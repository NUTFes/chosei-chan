export type ButtonProps = {
  variants?: 'primary' | 'secondary'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  outlined?: boolean
  loading?: boolean
  children: React.ReactNode
} & JSX.IntrinsicElements['button']
