import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxRect, CheckMark } from './CheckboxRect';
import './styles.css';

export function Checkbox({ checked, children, ...restProps }) {
  return (
    <label className="checkbox__label">
      <input type="checkbox" className="checkbox__input" {...restProps} />
      <span className="checkbox__fake-input">
        <CheckboxRect>
          {checked && <CheckMark />}
        </CheckboxRect>
      </span>
      {children}
    </label>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
};

Checkbox.defaultProps = {
  checked: false,
  children: null,
};
