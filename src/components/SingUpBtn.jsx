import PropTypes from "prop-types";
import { useState } from "react";

const CustomButton = ({ text = "записаться", onClick = () => {} }) => {
  const [isHovered, setIsHovered] = useState(false); 

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "flex-start", 
    marginTop: "50px",
    width: "100%",
    paddingRight: "40%", 
  };

  const customButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "12px 24px",
    fontSize: "25px",
    fontWeight: "bold",
    fontFamily: '"Dudka", sans-serif',
    borderRadius: "50px",
    backgroundColor: isHovered ? "#1F1B1C" : "#F6F3EC", 
    color: isHovered ? "#F6F3EC" : "#1F1B1C", 
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s", 
    width: "max-content", 
    margin: "0 auto", 
  };

  const starIconStyle = {
    width: "35px",
    height: "35px",
  };

  return (
    <div style={buttonContainerStyle}>
      <button
        onClick={onClick}
        style={customButtonStyle}
        onMouseOver={() => setIsHovered(true)} 
        onMouseOut={() => setIsHovered(false)} 
      >
        <StarIcon style={starIconStyle} />
        {text}
        <StarIcon style={starIconStyle} />
      </button>
    </div>
  );
};

function StarIcon({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={style}
    >
      <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
    </svg>
  );
}

StarIcon.propTypes = {
  style: PropTypes.object, 
};

CustomButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomButton;
