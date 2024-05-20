
import React from "react";
import Logo from "../../assets/Logo.png";
import  "./styles.css" 
import 'bootstrap/dist/css/bootstrap.min.css';

export function Header() {
  return (
    <div className="headerContainer">
       <img src={Logo} alt="Logo ShelfScape" />
    </div>
  );
}
