import NavLinks from "./NavLinks";
import NavSocialLinks from "./NavSocialLinks";

function FootNote() {
  const date = new Date().getFullYear();

  return (
    <div id="foot-note">
      <div className="foot-note-center">
        <NavLinks parentClass="nav-links" childClass="nav-link" />
        <NavSocialLinks parentClass="nav-links" childClass="nav-link" />
        <p>
          copyright @{date} backroads travel tours company. all right reserved.
        </p>
      </div>
    </div>
  );
}

export default FootNote;
