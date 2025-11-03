import { NavbarButtonProps } from "../../types/NavbarButtonProps";
const NavbarButton = ({ onClick, label, variant, disabled, id }: NavbarButtonProps) => (
  <button id = {id} onClick={onClick} className={`btn ${variant}`} disabled={disabled}>
    {label}
  </button>
);

export default NavbarButton;
