import "./Button.css"; // Import your CSS for button styles (if needed)
import PropTypes from "prop-types"; // Import PropTypes

const Button = ({ text, type }) => {
  // Apply a dynamic class based on the type prop
  const buttonClass = type ? `btn ${type}` : "btn primary"; // default 'primary' if no type is specified

  return <button className={buttonClass}>{text}</button>;
};

//Prop types validation
Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};
export default Button;
