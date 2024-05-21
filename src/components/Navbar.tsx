import NavLinkItem from "./NavLinkItem";

const Navbar = () => {
  const navLinks: NavLinkPropsSimple[] = [
    {
      to: "/",
      text: "Home"
    },
    {
      to: "/search",
      text: "Try it out!"
    },
    {
      to: "/login",
      text: "Login"
    }
  ];
  return (
    <div className="text-3xl px-6 py-4 bg-teal-500 border-b-2 border-black flex justify-between">
      {navLinks.map((link, index) => (
        <NavLinkItem
          key={index}
          link={link}
        />
      ))}
    </div>
  );
};
export default Navbar;
