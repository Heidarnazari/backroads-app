import { navSocialLinks } from "../data";

function NavSocialLinks({ parentClass, childClass }) {
  const links = navSocialLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.href} className={childClass}>
          <i className={link.iconClass}></i>
        </a>
      </li>
    );
  });

  return <ul className={parentClass}>{links}</ul>;
}

export default NavSocialLinks;
