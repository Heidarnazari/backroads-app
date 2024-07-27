import NavLinks from "./NavLinks";
import NavSocialLinks from "./NavSocialLinks";
import { navLinks } from "../data";

function Navbar() {
  function handleNavToggle(ev) {
    const menuLinks = document.querySelector(`.nav-menu-links`);
    if (!menuLinks.classList.contains(`show-nav-menu-links`)) {
      menuLinks.style.height = `${2 + navLinks.length * 2}rem`;
    } else {
      menuLinks.style.height = `0rem`;
    }
    menuLinks.classList.toggle(`show-nav-menu-links`);
  }

  window.addEventListener(`scroll`, (ev) => {
    const navbar = document.querySelector(`.navbar`);
    if (window.scrollY > 5) {
      if (!navbar.classList.contains(`scrolling-navbar`)) {
        navbar.classList.add(`scrolling-navbar`);
      }
    } else {
      navbar.classList.remove(`scrolling-navbar`);
    }
  });

  return (
    <nav id="nav" className="navbar">
      <div className="nav-center">
        <p className="logo">
          Back<span>Roads</span>
        </p>
        <NavLinks parentClass="section-links nav-links" childClass="nav-link" />
        <div>
          <NavSocialLinks
            parentClass="nav-social-icons nav-links"
            childClass="nav-link"
          />
          <button className="nav-toggle-btn" onClick={handleNavToggle}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      {/* end of nav-center */}
      <div className="nav-menu-links">
        {navLinks.map((link) => {
          return (
            <div className="nav-menu-link" key={link.id}>
              <a href={link.href}>{link.content}</a>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
