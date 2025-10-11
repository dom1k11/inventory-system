import { NavbarButtonProps } from "../../types/NavbarButtonProps";
const NavbarButton = ({
  onClick,
  label,
  variant,
  disabled,
}: NavbarButtonProps) => (
  <button
    onClick={onClick}
    className={`btn ${variant}`}
    disabled={disabled}
  >
    {label}
  </button>
);

export default NavbarButton;
