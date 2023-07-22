import { ButtonProps } from './Button.types';
import classNames from 'classnames';

const Button: React.FC<ButtonProps> = ({
  children,
  variants = 'primary',
  size = 'md',
  loading,
  outlined,
  ...props
}) => {
  return (
    <button
      className={classNames('btn', `btn-${variants}`, `btn-${size}`, outlined && 'btn-outline')}
      {...props}
    >
      {loading && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
};

export default Button;
