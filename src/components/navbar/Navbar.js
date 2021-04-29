import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { IoCart, IoNotificationsSharp, IoExitOutline } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">O.</h1>
      <ul className="list">
        <li>
          <Link to="/">
            <AiFillHome />
          </Link>
        </li>
        <li>
          <Link to="/collection">
            <BsFillPersonFill />
          </Link>
        </li>
        <li>
          <Link to="/collection">
            <IoCart />
          </Link>
        </li>
        <li>
          <Link to="/collection">
            <IoNotificationsSharp />
          </Link>
        </li>
        <li>
          <Link to="/collection">
            <FaQuestion />
          </Link>
        </li>
        <li>
          <Link to="/collection">
            <IoExitOutline />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
