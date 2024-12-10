import CartButton from "./CartButton";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import ModeToggle from "./ModeToggle";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="bg-muted py-4 ">
      <div className="align-element flex items-center justify-between">
        <Logo />
        <LinksDropdown />
        <NavLinks />
        <div className="flex items-center justify-center gap-3">
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
