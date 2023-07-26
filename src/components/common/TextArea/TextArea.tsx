import classNames from 'classnames'
import { forwardRef } from 'react'
import { TextAreaProps } from './TextArea.types'

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { bordered, ghosted } = props
  const borderedClass = bordered ? 'textarea-bordered' : ''
  const ghostedClass = ghosted ? 'testarea-ghost' : ''
  return (
    <textarea
      ref={ref}
      className={classNames('textarea bg-white', borderedClass, ghostedClass)}
      {...props}
    />
  )
})

TextArea.displayName = 'TextArea'
export default TextArea
