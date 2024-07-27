import { navLinks } from "../data";

function NavLinks({ parentClass, childClass }) {
  const links = navLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.href} className={childClass}>
          {link.content}
        </a>
      </li>
    );
  });

  return <ul className={parentClass}>{links}</ul>;
}

export default NavLinks;
