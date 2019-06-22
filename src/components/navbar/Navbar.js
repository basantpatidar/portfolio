import React from "react";
import styles from "./Navbar.module.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class NavbarComponent extends React.Component {
  render() {
    return (
      <div className={styles.navbarBody}>
        <Navbar expand="md" className={styles.Navbar}>
          <NavbarBrand className={styles.NavbarBrand} href="/">
            Basant Patidar
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className={styles.NavLink} href="#">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.NavLink} href="#timeline">
                  TimeLine
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.NavLink} href="#projects">
                  Projects
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="#testimonials">Testimonials</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
