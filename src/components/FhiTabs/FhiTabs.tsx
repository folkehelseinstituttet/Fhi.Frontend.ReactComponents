import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

type FhiTabsProps = {
  links: {
    title: string,
    path: string
  }[],
  className?: string,
};

const FhiTabs:FC<FhiTabsProps> = ({ links, className }) => (
  <Nav variant="tabs" className={className}>
    {links.map((link) => (
      <Nav.Item key={link.path}>
        <Nav.Link as={NavLink} to={link.path}>
          {link.title}
        </Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);

FhiTabs.defaultProps = {
  className: 'mb-7', // Setting margin bottom 7 as default making it easy to override if nessesary
};

export default FhiTabs;
