import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import UserState from "./UserState";
const Header = () => {
  return (
    <nav>
      <Link to="/" className="nav--link nav--title ">
        Novel Navigator
      </Link>
      <Link
        to="/topbooks"
        className="nav--link nav--sub hover-underline-animation"
      >
        Top 50 Books
      </Link>
      <Link
        to="/recommendations"
        className="nav--link nav--sub hover-underline-animation"
      >
        For me
      </Link>
      <Link
        to="/about"
        className="nav--link nav--sub hover-underline-animation"
      >
        About
      </Link>
      <SearchBar />
      <UserState />
    </nav>
  );
};
export default Header;
