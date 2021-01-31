import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ExpandMore } from "@material-ui/icons";
import categories from "../../data/navcategory";
function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar__container">
        <div className="Navbar__categories">
          <h6>All Categories</h6>
          <ExpandMore />
        </div>
        <div className="Navbar__nav">
          <ul className="Navbar__list">
            {categories.map((category) => (
              <div className="Navbar__item" key={category.id}>
                <Link className="Navbar__link" to={`/${category.slug}`}>
                  {category.title}
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
