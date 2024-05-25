import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo1.png';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Our Programs', path: '/programs' },
  { name: 'Join Our Team', path: '/careers' },
  { name: 'Schedules', path: '/schedules' },
];

function Navbar() {
  const pathname = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white p-4">
        <div className="flex justify-between items-center sm:mb-5">
          <Link to="/">
            <img src={Logo} className="w-[70px]" alt="CodeKids" />
          </Link>
          <Button className="default-button hidden sm:flex">Book Now</Button>

          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            size="xl"
            className="block sm:hidden cursor-pointer transition-transform transform"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div
          className={`navbar flex flex-col items-center sm:block sm:max-h-full sm:overflow-visible transition-all duration-300 ease-in-out transform sm:h-auto ${
            isOpen ? 'navbar-expanded' : 'navbar-collapsed'
          }`}
        >
          <ul className="py-4 sm:py-0 flex flex-col items-center gap-4 sm:flex sm:flex-row sm:justify-end sm:gap-10">
            {links.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative before:bg-c_accent ${
                    pathname === link.path ? 'text-c_accent' : 'nav-link'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="default-button my-5 sm:hidden">Book Now</Button>
        </div>
      </nav>
      <Separator className="bg-c_primary-light/70" />
    </>
  );
}

export default Navbar;
