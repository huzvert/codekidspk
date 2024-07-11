import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import CartContext from "../context/cartContext";
import Logo from "/assets/logo1.png";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Badge from "../components/Badge";
import {
  faBars,
  faTimes,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Our Programs", path: "/programs" },
  { name: "Join Our Team", path: "/careers" },
  { name: "Schedules", path: "/schedules" },
];

function Navbar() {
  const pathname = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const { cart, setCart } = useContext(CartContext);
  const itemCount = cart.items.length; // Number of items in the cart

  // Close the navbar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = event => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav ref={navbarRef} className="bg-black text-white p-4 relative">
        <div className="flex justify-between items-center sm:mb-5">
          <Link to="/">
            <img src={Logo} className="w-[70px]" alt="CodeKids" />
          </Link>

          <div className="flex gap-8 justify-center items-center relative">
            <Link
              to="/cart"
              className="relative cursor-pointer hidden sm:block"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                size="2xl"
                className="hover:text-c_accent transition-colors duration-300 ease-in-out"
              />
              <Badge count={itemCount} />
            </Link>

            <Link to="/programs" className="hidden sm:flex">
              <Button className="default-button">Book Now</Button>
            </Link>
          </div>

          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            size="xl"
            className="block sm:hidden cursor-pointer transition-transform transform"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div
          className={`navbar flex flex-col items-center sm:block sm:max-h-full sm:overflow-visible transition-all duration-300 ease-in-out transform sm:h-auto ${
            isOpen ? "navbar-expanded" : "navbar-collapsed"
          }`}
        >
          <ul className="py-4 sm:py-0 flex flex-col items-center gap-4 sm:flex sm:flex-row sm:justify-end sm:gap-10">
            {links.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative before:bg-c_accent ${
                    pathname === link.path ? "text-c_accent" : "nav-link"
                  }`}
                  onClick={() => setIsOpen(false)} // Close navbar when a link is clicked
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Separator className="sm:hidden max-w-[50%] bg-gray-800" />

          <div className="flex flex-col items-center gap-4 mt-4">
            <Link to="/cart" className="relative cursor-pointer sm:hidden">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="xl"
                className="hover:text-c_accent transition-colors duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              />
              <Badge count={itemCount} />
            </Link>

            <Link
              to="/programs"
              className="my-4 sm:hidden"
              onClick={() => setIsOpen(false)}
            >
              <Button className="default-button">Book Now</Button>
            </Link>
          </div>
        </div>
      </nav>
      <Separator className="bg-c_primary-light/70" />
    </>
  );
}

export default Navbar;
