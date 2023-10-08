import { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const [activeLink, setActiveLink] = useState<string | null>("/");

  return (
    <header>
      <nav>
        <div className="wrapper">
          <Link to="/" className="logo-link">
            conduit
          </Link>
          <ul className="list">
            <li>
              <Link
                to="/"
                className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                onClick={() => setActiveLink("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sign-in"
                className={`nav-link ${activeLink === "/sign-in" ? "active" : ""}`}
                onClick={() => setActiveLink("/sign-in")}
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className={`nav-link ${activeLink === "/sign-up" ? "active" : ""}`}
                onClick={() => setActiveLink("/sign-up")}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
