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
  const variantsClass = variants ? `btn-${variants}` : 'btn-primary';
  const sizeClass = size === 'md' ? '' : `btn-${size}`;
  const outlinedClass = outlined ? 'btn-outline' : '';

  return (
    <button className={classNames('btn', variantsClass, sizeClass, outlinedClass)} {...props}>
      {loading && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
};

export default Button;
