import React from "react";
import Search from "../../header/Search";

const NavHero = ({ hero }) => {
  return (
    <div className="hero_section">
      <>
        {hero === "jobs" && <div className="title">Find Job</div>}
        {hero === "jobs" && (
          <div className="search_nav">
            <Search />
          </div>
        )}
        {hero === "contact" && <h1 className="title">Contact Us</h1>}
      </>
    </div>
  );
};

export default NavHero;