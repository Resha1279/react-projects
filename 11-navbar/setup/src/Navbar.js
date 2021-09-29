import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    let linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <div
            className="nav-toggle"
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <FaBars />
          </div>
        </div>

        <div
          className={`links-container ${showLinks && "show-container"}`}
          ref={linksContainerRef}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href="#">{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url} target="_blank">
                  {item.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
