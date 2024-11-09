import Button from "./Button";
import boLogo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src={boLogo} alt="Bo Logo" />
        <div className="navbarMenu">
          <a href="">Home</a>
          <Button text="Connect with me" type="secondary" />
          <Button text="Connect with me" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
