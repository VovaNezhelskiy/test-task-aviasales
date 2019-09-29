import React from 'react';
import LogoIcon from '../../assets/images/logo.svg';
import './styles.css';

export function HeaderContainer() {
  return (
    <article className="header__container centered-container">
      <span className="logo__container">
        <LogoIcon/>
      </span>
    </article>
  );
}
