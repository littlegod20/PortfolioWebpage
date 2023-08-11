import {FaBars} from 'react-icons/fa';
import { useState } from "react";

function Header() {
 
  const [mobileNavBar, setMobileNavBar] = useState("menu hidden");
  const [isMobileNavBarClicked, setIsMobileNavBarClicked] = useState(false);

  //toggle burger menu change
  const updateMenu = () => {
    if (!isMobileNavBarClicked) {

      setMobileNavBar("menu visible");
    } else {

      setMobileNavBar("menu hidden");
    }
    setIsMobileNavBarClicked(!isMobileNavBarClicked);
  };

  console.log("logging",mobileNavBar);
  return (
    <header>
      <>
        <nav className="nav-container">
          <h1 className="logo">Lendex</h1>

          {/*Show in desktop */}
          <ul className="desktop_menu">
            <li className="link link1">
              <a href="#Home">Home</a>
            </li>
            <li className="link link2">
              <a href="#Service">Service</a>
            </li>
            <li className="link link3">
              <a href="#Blog">Blog</a>
            </li>
            <li className="link link4">
              <a href="#Pages">Pages</a>
            </li>
            <li className="link link5">
              <a href="#Contacts">Contacts</a>
            </li>
     
          </ul>
          <button href="#Hire Me" className="hire-me">
                Hire Me
              </button>
        </nav>

        <nav className="mobile-menu">
        <div className="bar">
          <h1 className="lendex">Lendex</h1>
          <button onClick={()=>updateMenu()}>
            <FaBars  />
          </button>
          </div>
          {/*Show on mobile*/}
          <ul className={mobileNavBar}>
            <li className="link link1">
              <a href="#Home">Home</a>
            </li>
            <li className="link link2">
              <a href="#Service">Service</a>
            </li>
            <li className="link link3">
              <a href="#Blog">Blog</a>
            </li>
            <li className="link link4">
              <a href="#Pages">Pages</a>
            </li>
            <li className="link link5">
              <a href="#Contacts">Contacts</a>
            </li>

          </ul>
     
        </nav>
      </>
    </header>
  );
}

export default Header;
