import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavButton } from "../Button/NavButton";
import { LanguageButton } from "../Button/LanguageButton";

export const Header = props => {
  const { details } = props;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {details.left.map((l, i) => {
            return (
              <li key={`left_button_${i}`} className="nav-item">
                <NavButton title={l.title} linkTo={l.linkTo} />
              </li>
            );
          })}
        </Nav>
        <Nav>
          {details.right.map((l, i) => {
            return (
              <li key={`right_button_${i}`} className="nav-item">
                <LanguageButton title={l.title} />
              </li>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
