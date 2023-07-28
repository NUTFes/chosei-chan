import classNames from 'classnames'
import { ButtonProps } from './Button.types'

const Button: React.FC<ButtonProps> = ({
  children,
  variants = 'primary',
  size = 'md',
  loading,
  outlined,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        'btn',
        `btn-${variants}`,
        `btn-${size}`,
        outlined && 'btn-outline',
        className,
      )}
      {...props}
    >
      {loading && <span className='loading loading-spinner'></span>}
      {children}
    </button>
  )
}

export default Button
