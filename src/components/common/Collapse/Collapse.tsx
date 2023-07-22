import { CollapseProps } from './Collapse.types';
import classNames from 'classnames';
import { Children } from 'react';

const Collapse: React.FC<CollapseProps> = ({ children }) => {
  return (
    // <button className={classNames('btn', variantsClass, sizeClass, outlinedClass)} {...props}>
    //   {loading && <span className="loading loading-spinner"></span>}
    //   {children}
    // </button>
    <details className="collapse">
      <summary className="collapse-title text-xl font-medium">
        <p className="hover:underline">Click to open/close</p>
      </summary>
      <div className="collapse-content">{children}</div>
    </details>
  );
};

export default Collapse;
