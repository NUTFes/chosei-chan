import { CollapseProps } from './Collapse.types';
import classNames from 'classnames';
import { Children } from 'react';

const Collapse: React.FC<CollapseProps> = ({ children, text }) => {
  return (
    <details className="collapse">
      <summary className="collapse-title text-xl font-medium">
        <p className="hover:underline">{text}</p>
      </summary>
      <div className="collapse-content">{children}</div>
    </details>
  );
};

export default Collapse;
