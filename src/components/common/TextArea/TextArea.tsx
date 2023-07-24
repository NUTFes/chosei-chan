import classNames from 'classnames'
import { TextAreaProps } from './TextArea.types'

const TextArea: React.FC<TextAreaProps> = ({ bordered, ghosted }) => {
  const borderedClass = bordered ? 'textarea-bordered' : ''
  const ghostedClass = ghosted ? 'testarea-ghost' : ''
  return (
    <textarea className={classNames('textarea bg-white', borderedClass, ghostedClass)} />
  )
}

export default TextArea
