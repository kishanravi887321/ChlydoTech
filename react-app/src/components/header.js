import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './logo';
import { MobileMenu } from './mobile-menu';

export const Header = () => {
  return (
    <div className="fixed z-50 pt-8 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center justify-between container">
        <Link to="/">
          <Logo className="w-[120px] md:w-[140px]" />
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {["Services", "About", "Dashboard", "Contact"].map((item) => (
            <Link
              className="uppercase inline-block font-mono text-sm text-foreground/60 hover:text-primary duration-300 transition-colors ease-out"
              to={`/${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>
        <Link
          className="uppercase max-lg:hidden transition-colors ease-out duration-300 font-mono text-sm text-primary hover:text-secondary"
          to="/dashboard"
        >
          Portal
        </Link>
        <MobileMenu />
      </header>
    </div>
  );
};
