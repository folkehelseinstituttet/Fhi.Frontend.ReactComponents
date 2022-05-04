import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import styled from 'styled-components';

type FhiTabBarProps = {
  links: {
    title: string,
    path: string
  }[],
  className?: string,
};

const TabBarLink = styled(NavLink)`
  .nav-tabs &.nav-link {
    width: 350px;
    padding: ${({ theme }) => `${theme.fhiSpace3} ${theme.fhiSpace4}`};
    margin-right: ${({ theme }) => theme.fhiSpace3};
    border-bottom: none;

    text-decoration: none;
    background-color: ${({ theme }) => theme.fhiBlueGrey3};
    color: #000;
    transition: background-color .1s ease-in-out, border-color .1s ease-in-out;
    
    font-size: 1.1rem;
    border-color: ${({ theme }) => theme.fhiGreyLight4};
    border-top-left-radius: ${({ theme }) => theme.fhiSpace2};
    border-top-right-radius: ${({ theme }) => theme.fhiSpace2};
    &.active {
      color: #000;
      font-weight: bold;
      background-color: ${({ theme }) => theme.fhiWhite};
      border-color: ${({ theme }) => theme.fhiGreyLight4};
    }

    &:hover, &:focus {
      border-color: ${({ theme }) => `${theme.fhiGrey1} ${theme.fhiGrey1} ${theme.fhiWhite}`};
      background-color: ${({ theme }) => theme.fhiGreyLight1};
    }
  }
`;

const NavList = styled.ul`
  border-bottom: none;  
`;

const NavContainer = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 24px;
`;

const FhiTabBar:FC<FhiTabBarProps> = ({ links, className }) => (
  <NavContainer className={className}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Nav
            as={NavList}
            variant="tabs"
          >
            {links.map((link) => (
              <Nav.Link
                as={TabBarLink}
                to={link.path}
                key={link.path}
              >
                <div>
                  <span>{link.title}</span>
                </div>
              </Nav.Link>
            ))}
          </Nav>
        </div>
      </div>
    </div>
  </NavContainer>
);

FhiTabBar.defaultProps = {
  className: '',
};

export default FhiTabBar;
