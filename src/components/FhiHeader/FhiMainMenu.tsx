/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export type FhiMainMenuProps = {
  menuItems: {
    name: string,
    routerLink: string,
  }[]
};

const FhiMainMenu:FC<FhiMainMenuProps> = ({ menuItems }) => {
  const [isOpen, setOpen] = useState(false);

  const mainMenuClose = () => setOpen(false);
  const mainMenuToggle = () => setOpen(!isOpen);

  if (!menuItems || menuItems.length === 0) {
    return null;
  }

  return (
    <div className="container fhi-header__main-menu-container">
      <nav className={`fhi-main-menu ${isOpen ? 'fhi-main-menu--open' : ''}`}>
        <div className="container fhi-main-menu__container">
          <Link to="/" className="fhi-main-menu__home-link">
            <i className="icon-fhi-logo fhi-header__logo-icon fhi-main-menu__logo-icon" />
            <span className="visually-hidden">FHI Produktnavn</span>
          </Link>
          <button
            type="button"
            aria-controls="fhi-main-menu"
            className="fhi-main-menu__toggler"
            aria-expanded={isOpen}
            onClick={mainMenuToggle}
          >
            <i className="icon-xmark fhi-main-menu__toggler-close-icon" />
            <i className="icon-list fhi-main-menu__toggler-menu-icon" />
            <span className="fhi-main-menu__toggler-text">{ !isOpen ? 'Meny' : 'Lukk' }</span>
          </button>
          <div className={`collapse fhi-main-menu__collapse ${isOpen ? 'show' : ''}`}>
            <ul className="nav nav-tabs fhi-nav-tabs fhi-main-menu__nav">
              {menuItems.map((link) => (
                <li className="fhi-main-menu__nav-item" key={link.routerLink}>
                  <NavLink
                    to={link.routerLink}
                    onClick={mainMenuClose}
                    className="nav-link fhi-main-menu__nav-link"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {isOpen && <div className="fhi-backdrop-responsive" onClick={mainMenuClose} />}
    </div>
  );
};

export default FhiMainMenu;
