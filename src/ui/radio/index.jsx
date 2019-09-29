import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import './styles.css';

export function Radio({ checked, children, ...restProps }) {
  return (
    <label className={cn('radio__label', { checked })}>
      <input className="radio__input" type="radio" {...restProps} />
      {children}
    </label>
  );
}

Radio.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
};

Radio.defaultProps = {
  checked: false,
  children: null,
};
