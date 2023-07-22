import { TextAreaProps } from "./TextArea.types";
import classNames from "classnames";

const TextArea: React.FC<TextAreaProps> = ({
    bordered,
    ghosted,
  }) => {
    const borderedClass = bordered ? 'textarea-bordered' : '';
    const ghostedClass = ghosted ? 'testarea-ghost' : '';
    return (
      <textarea className={classNames('textarea', borderedClass, ghostedClass)}>
      </textarea>
    );
  };

  export default TextArea;
