import CustomButton from "./SingUpBtn";

const Home = () => {
  const leftStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start", 
    paddingLeft: "20px",
    paddingRight: "120px", 
    position: "relative", 
    zIndex: 4,
    marginRight: "50px",
    backgroundImage: "linear-gradient(to right, #1F1B1C 85%, transparent)", 
  };
  

  const h1Style = {
    margin: 0,
    fontSize: "5.5rem",
    lineHeight: "0.75",
  };

  const h2Style = {
    margin: 0,
    fontSize: "4.5em",
    color: "#555150",
    lineHeight: "0.75",
  };

  const rightStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };

  const svgContainerStyle = {
    position: "relative",
    width: "600px",
    height: "600px",
  };

  const menSvgStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    width: "400px",
    height: "auto",
  };

  const tagSvgStyle = {
    position: "absolute",
    top: "-71%",
    left: "-68%",
    zIndex: 1,
    width: "1450px",
    height: "1450px",
    animation: "rotate 50s infinite linear",
    transformOrigin: "center",
  };

  const rotateKeyframes = `
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <div className="main-screen">
      <style>{rotateKeyframes}</style>
      <div style={leftStyle}>
        <h2 style={h2Style}>Навсегда <br /> красиво,<br />навсегда твое</h2>
        <h1 style={h1Style}>Tatoo studio</h1>
        <div className="button-container">
          <CustomButton onClick={() => console.log("Нажали на кнопку")} />
        </div>
      </div>
      <div style={rightStyle}>
        <div style={svgContainerStyle}>
          <img style={tagSvgStyle} src="src/assets/tag.svg" alt="Tag" />
          <img style={menSvgStyle} src="src/assets/men.svg" alt="Men" />
        </div>
      </div>
    </div>
  );
};

export default Home;
