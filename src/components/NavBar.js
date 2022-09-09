import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/navIcon1.svg';
import navIcon2 from '../assets/img/navIcon2.svg';
import navIcon3 from '../assets/img/navIcon3.svg';
import navIcon4 from '../assets/img/navIcon4.svg';
export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])
    return (
          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
              <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <span className="navbar-text">
                  <div className="social-icon">
                    <a href="https://vk.com/kachochek17"><img src={navIcon1} alt="" /></a>
                    <a href="https://www.instagram.com/artem696869/?hl=en"><img src={navIcon2} alt="" /></a>
                    <a href="https://t.me/proccess_died"><img src={navIcon3} alt="" /></a>
                    <a href="https://www.youtube.com/channel/UCGlWe-kt6hFp9wN3tehHxtA"><img src={navIcon4} alt="" /></a>
                  </div>
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      )
    }