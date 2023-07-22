import { InputProps } from './Input.types';
import classNames from 'classnames';

const Input: React.FC<InputProps> = (props) => {
  return <input className="input input-bordered" {...props} />;
};

export default Input;