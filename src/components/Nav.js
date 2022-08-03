import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";


function Nav() {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/profile");
    }
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);

    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () =>
            window.removeEventListener("scroll", transitionNavbar);
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`} >
            <div className="nav_content">
                <img
                    onClick={() => {
                        navigate("/");
                    }}
                    className="nav_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
                    alt="Netflix Logo"
                />
                <img
                    className="nav_avatar"
                    onClick={handleClick}
                    src="https://p7.hiclipart.com/preview/184/113/161/user-profile-computer-icons-clip-art-profile.jpg"
                    alt="Netflix Logo"
                />
            </div>

        </div >
    )
}

export default Nav