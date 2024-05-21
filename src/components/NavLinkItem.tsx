import { NavLink } from "react-router-dom";

const NavLinkItem = ({ link }: { link: NavLinkPropsSimple }) => {
  return (
    <NavLink to={link.to}>
      <p className="hover:text-white">{link.text}</p>
    </NavLink>
  );
};
export default NavLinkItem;
