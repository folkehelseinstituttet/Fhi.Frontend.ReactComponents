import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type FhiMainMenuProps = {
  menuItems: {
    name: string,
    routerLink: string,
  }[],
  logo: string,
  faIcons: {
    menu: IconDefinition,
    close: IconDefinition,
  }
};

const FhiMainMenu:FC<FhiMainMenuProps> = ({ menuItems, logo, faIcons }) => {
  const [isOpen, setOpen] = useState(false);

  const mainMenuClose = () => setOpen(false);
  const mainMenuToggle = () => setOpen(!isOpen);

  return (
    <div className="fhi-app__main-menu">
      <div className="container fhi-app__main-menu-container">
        {isOpen && <div className="fhi-backdrop-responsive" aria-hidden="true" onClick={mainMenuClose} />}
        <nav className={`fhi-main-menu${isOpen ? ' fhi-main-menu--open' : ''}`}>
          <div className="container fhi-main-menu__container">
            <Link className="fhi-main-menu__home-link" to="/" onClick={mainMenuClose}>
              <img
                className="fhi-main-menu__home-link-img"
                alt="FHI-logo"
                src={logo}
              />
            </Link>
            <button
              className=" fhi-main-menu__toggler"
              type="button"
              aria-controls="fhi-main-menu"
              aria-expanded={isOpen}
              onClick={mainMenuToggle}
            >
              <FontAwesomeIcon icon={isOpen ? faIcons.close : faIcons.menu} />
              <span className="fhi-main-menu__toggler-text">{ !isOpen ? 'Meny' : 'Lukk meny' }</span>
            </button>
            <div className={`collapse fhi-main-menu__collapse${isOpen ? ' show' : ''}`}>
              <ul className="nav flex-column flex-xl-row fhi-main-menu__nav">
                {menuItems.map((item) => (
                  <li className="nav-item" key={item.name}>
                    <NavLink
                      className="nav-link fhi-main-menu__nav-link"
                      to={item.routerLink}
                      onClick={mainMenuToggle}
                    >
                      <span className="fhi-main-menu__nav-link-text">{ item.name }</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default FhiMainMenu;
