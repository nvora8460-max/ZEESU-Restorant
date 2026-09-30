import React, { useState } from 'react'
import { Link as ScrollLink } from "react-scroll"
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { data } from "../restApi.json";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleLinkClick = (linkId) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(linkId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav>
      <div className="logo" style={{color:"orange red", cursor: "pointer"}} onClick={() => navigate("/")}>ZEESU</div>
      <div className={show ? "navlink showmenu" : "navLinks "}>
        <div className="links">
          {
            data[0].navbarLinks.map(element => {
              return isHomePage ? (
                <ScrollLink to={element.link} key={element.id} spy={true} smooth={true} duration={500}>
                  {element.title}
                </ScrollLink>
              ) : (
                <RouterLink to="/" key={element.id} onClick={() => handleLinkClick(element.link)}>
                  {element.title}
                </RouterLink>
              );
            })
          }
        </div>
        <button className="menuBtn" onClick={() => navigate("/menu")}>OUR MENU</button>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  )
}

export default Navbar

