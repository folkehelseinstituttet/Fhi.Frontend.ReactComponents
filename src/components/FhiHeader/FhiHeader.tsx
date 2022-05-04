import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import FhiMainMenu from './FhiMainMenu';

type FhiHeaderProps = {
  projectName: string,
  className?: string,
  menuItems: {
    name: string,
    routerLink: string,
  }[],
  logo: string,
  logoLight: string,
  faIcons: {
    menu: IconDefinition,
    close: IconDefinition,
  }
};

const PaddingHeader = styled.header`
background-color: ${({ theme, backgroundColor }) => backgroundColor || theme.fhiWhite};
  margin-bottom: 0;
  padding-bottom: 2.5rem;
`;

const FhiHeader:FC<FhiHeaderProps> = ({
  projectName,
  menuItems,
  className,
  logo,
  logoLight,
  faIcons,
}) => (
  <PaddingHeader className={`fhi-app__header ${className}`}>
    <div className="fhi-app__brand">
      <div className="container fhi-app__brand-container">
        <div className="fhi-app__brand-content">
          <Link className="fhi-app__logo" to="/">
            <img src={logo} alt="FHI-logo" />
          </Link>
          <div className="fhi-app__project">
            <span className="fhi-app__project-name">{projectName}</span>
          </div>
        </div>
      </div>
    </div>
    <FhiMainMenu
      menuItems={menuItems}
      logo={logoLight}
      faIcons={faIcons}
    />
  </PaddingHeader>
);

FhiHeader.defaultProps = {
  className: '',
};

export default FhiHeader;
