import { forwardRef, memo } from 'react'
import { InputProps } from './Input.types'

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} className='input input-bordered bg-white' {...props} />
})

const [displayName] = Object.keys(Input)
Input.displayName = displayName

export default memo(Input)
