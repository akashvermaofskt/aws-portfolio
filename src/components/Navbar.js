import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="https://www.linkedin.com/in/akashvermaofskt/"><i className="fas fa-crown" id="ico" ></i>{'   '}Personal Portfolio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="navbar-nav navbar-right ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#about">About <span className="sr-only">(current)</span> </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#showcase">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#cm">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>  
  );
}

export default Navbar;
