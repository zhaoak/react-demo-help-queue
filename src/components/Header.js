import React from "react";
import ticketsImage from "./../img/augh.JPG";

function Header() {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="oh no an error" />
    </React.Fragment>
  );
}

export default Header;
