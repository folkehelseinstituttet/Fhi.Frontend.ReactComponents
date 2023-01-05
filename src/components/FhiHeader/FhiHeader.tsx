import { FC } from 'react';
import { Link } from 'react-router-dom';

import FhiMainMenu from './FhiMainMenu';

type FhiHeaderProps = {
  projectName: string,
  className?: string,
  menuItems: {
    name: string,
    routerLink: string,
  }[],
};

const FhiHeader:FC<FhiHeaderProps> = ({
  projectName,
  menuItems,
  className,
}) => (
  <header className={`fhi-header ${className}`}>
    <div className="fhi-header__brand">
      <div className="container fhi-header__brand-container">
        <div className="fhi-header__brand-content">
          <Link to="/" className="fhi-header__logo">
            <i className="icon-fhi-logo fhi-header__logo-icon" />
            <span className="visually-hidden">{projectName}</span>
          </Link>
          <div className="fhi-header__project">
            <span className="fhi-header__project-name">{projectName}</span>
          </div>
        </div>
      </div>
    </div>
    <FhiMainMenu menuItems={menuItems} />
  </header>
);

FhiHeader.defaultProps = {
  className: '',
};

export default FhiHeader;
