import React from 'react';
import { Link } from "react-scroll";
const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="https://www.linkedin.com/in/akashvermaofskt/"><i className="fas fa-crown" id="ico" ></i>{'   '}Personal Portfolio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="navbar-nav navbar-right ml-auto">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ cursor: "pointer" }}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="showcase"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ cursor: "pointer" }}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="cm"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ cursor: "pointer" }}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>  
  );
}

export default Navbar;
