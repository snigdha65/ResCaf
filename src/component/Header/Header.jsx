import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import logo from '../../../public/logo.png'

const Header = () => {
  return (
    <div>
      <nav className="p-6 w-full bg-stone-200 flex items-center justify-between">
        <img src={logo} alt="" />
        <div className="flex gap-6 font-bold">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/meals" className="text-white hover:text-red-500">
            Chef
          </ActiveLink>
          <ActiveLink to="/menu" className="text-white hover:text-red-500">
            Menu
          </ActiveLink>
          <ActiveLink to="/about" className="text-white hover:text-red-500">
            About
          </ActiveLink>
          <ActiveLink to="/contact" className="text-white hover:text-red-500">
            Contact
          </ActiveLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
