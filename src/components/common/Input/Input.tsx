import { InputProps } from './Input.types'

const Input: React.FC<InputProps> = (props) => {
  return <input className='input input-bordered bg-white' {...props} />
}

export default Input
