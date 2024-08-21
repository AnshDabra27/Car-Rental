import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/all-images/rental_hub_logo.png";
import "../../styles/header.css";


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +91-9100X-9200X
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/login" className=" d-flex align-items-center gap-1 login_button">
                  <i className="ri-login-circle-line login_button2"></i> Login
                </Link>

                <Link to="/register" className=" d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      
      <div className="header__middle d-flex justify-content-space-between">
      <div className="navigation__wrapper d-flex align-items-center justify-content-between flex ">
        <Container>
          <Row>
          <div className="HeaderDiv">

          <div>
          <div>
            <Col >
              <div className="logo">
                <img src={logo} alt="logo" className="logo_img"/>
              </div>
            </Col>
          </div>
            
            {/* <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span> */}
          <div>
            <Col>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div> 
            </Col>
          </div> 
          </div>
          
          <div>
          <div>
            <Col>
            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
            </Col>
          </div>
          

            {/* <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Chandigarh</h4>
                  <h6>Sector 12, Chandigarh</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Monday to Saturday</h4>
                  <h6>10am - 8pm</h6>
                </div>
              </div>
            </Col> */}
          <div>
            <Col
              // lg="2"
              // md="3"
              // sm="0"
              // className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Call Request
                </Link>
              </button>
            </Col>
          </div>
          </div>
        </div>
          </Row>
        </Container>
      </div>
      </div>

      {/* ========== main navigation =========== */}

      {/* <div className="main__navbar">
        <Container>
          {/* <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div> 
        </Container>
      </div> */}
      
    </header>
  );
};

export default Header;
