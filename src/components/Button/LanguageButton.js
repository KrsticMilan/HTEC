import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const LanguageButton = props => {
  const { title } = props;
  const [country, setCountry] = useContext(ThemeContext);
  const location = useLocation();

  return (
    <Button
      variant="dark"
      className="nav-link language-button"
      onClick={e => setCountry(title)}
      disabled={location.pathname === "/news-details" ? true : false}
    >
      {title.toUpperCase()}
    </Button>
  );
};
