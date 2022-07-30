import React from "react";
import "./styles/Header.css";
import logo from "./header.jpg"




const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">FORUMUX</a>
                    <button className="navbar-toggler toggle-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Formus</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Media</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">What'sNew</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Resouces</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Members</a>
                            </li>
                        </ul>
                        <form className="d-flex me-5" role="search">
                            <i class="fas fa-search icon-header-search"></i>
                            <input className=" input " type="search" placeholder="Search..." aria-label="Search" />
                        </form>
                        <i class="fas fa-bell"></i>
                        <i class="far fa-envelope mail"></i>
                        <img src={logo} className="logo" alt="Logo" />
                        <i class="fas fa-arrow-down" id="image-beside"></i>
                    </div>
                </div>
            </nav>

        </>
    )

}
export default Header;