import { TextAreaProps } from "./TextArea.types";
import classNames from "classnames";

const TextArea: React.FC<TextAreaProps> = ({
    variants = 'primary',
    size = 'sm',
    bordered,
    ghost,
  }) => {
    const variantsClass = variants ? `textarea-${variants}` : 'textarea-primary';
    const sizeClass = size === 'md' ? '' : `textarea-${size}`;
    const borderedClass = bordered ? 'textarea-bordered' : '';
    const ghostClass = ghost ? 'testarea-ghost' : '';
    return (
      <textarea className={classNames('textarea', variantsClass, sizeClass, borderedClass, ghostClass)}>
      </textarea>
    );
  };

  export default TextArea;
