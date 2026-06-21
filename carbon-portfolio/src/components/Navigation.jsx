import { useState } from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderPanel,
  SideNav,
  SideNavItems,
  SideNavLink,
} from '@carbon/react';

const Navigation = () => {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#timeline', label: 'Experience' },
    { href: '#volunteering', label: 'Volunteering' },
    { href: '#documents', label: 'Documents' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsSideNavExpanded(false);
    }
  };

  return (
    <Header aria-label="Padma Kunapareddy Portfolio">
      <HeaderName href="#hero" prefix="">
        Padma Kunapareddy
      </HeaderName>
      <HeaderNavigation aria-label="Main navigation">
        {navItems.map((item) => (
          <HeaderMenuItem
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </HeaderMenuItem>
        ))}
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={() => setIsSideNavExpanded(!isSideNavExpanded)}
          isActive={isSideNavExpanded}
        />
      </HeaderGlobalBar>
      <SideNav
        aria-label="Side navigation"
        expanded={isSideNavExpanded}
        isPersistent={false}
        onOverlayClick={() => setIsSideNavExpanded(false)}
      >
        <SideNavItems>
          {navItems.map((item) => (
            <SideNavLink
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </SideNavLink>
          ))}
        </SideNavItems>
      </SideNav>
    </Header>
  );
};

export default Navigation;

// Made with Bob
