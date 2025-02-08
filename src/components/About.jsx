import { motion } from 'framer-motion';

const About = () => {
  const leftStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginRight: "50px",
  };

  const rightStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 4,
    marginLeft: "50px",
    backgroundImage: "linear-gradient(to left, #1F1B1C 85%, transparent)",
    padding: "0 20px",
  };

  const svgContainerStyle = {
    position: "relative",
    width: "600px",
    height: "600px",
    zIndex: 1,
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

  const textStyle = {
    color: "#F6F3EC",
    margin: "5px 0",
    fontFamily: "Dudka, sans-serif",
    textAlign: "center",
  };

  const titleStyle = {
    color: "#AC8F32",
    textAlign: "center",
  };

  const separatorStyle = {
    display: "flex",
    alignItems: "center",
    width: "60%",
    justifyContent: "center",
    margin: "10px 0",
  };

  const lineStyle = {
    flex: 1,
    height: "2px",
    backgroundColor: "#F6F3EC",
  };

  const iconStyle = {
    width: "40px",
    height: "40px",
    fill: "#F6F3EC",
    margin: "0 10px",
  };

  const containerStyle = {
    position: "fixed",
    top: -15,
    left: 0,
    width: "100%",
    overflow: "hidden",
    zIndex: 3,
    backgroundColor: "#1F1B1C",
    boxShadow: "0 0 80px 100px #1F1B1C",
  };

  const containerBottomStyle = {
    ...containerStyle,
    bottom: -15,
    top: "auto",
  };

  const marqueeStyle = {
    display: "flex",
    whiteSpace: "nowrap",
    width: "max-content",
  };

  const wordStyle = {
    paddingRight: "0.5rem",
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#F6F3EC",
    opacity: 0.5,
  };

  const words = new Array(100).fill("About us");
  const repeatedWords = [...words, ...words];

  return (
    <div className="content" style={{ backgroundColor: "#1F1B1C", display: "flex" }}>
      <style>{rotateKeyframes}</style>
      <div style={containerStyle}>
        <motion.div
          style={marqueeStyle}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
        >
          {repeatedWords.map((word, index) => (
            <span key={index} style={wordStyle}>
              {word}
            </span>
          ))}
        </motion.div>
      </div>
      <div style={leftStyle}>
        <div style={svgContainerStyle}>
          <img style={tagSvgStyle} src="src/assets/tag.svg" alt="Tag" />
          <img style={menSvgStyle} src="src/assets/men.svg" alt="Men" />
        </div>
      </div>
      <div style={rightStyle}>
        <h1 style={titleStyle}>О мастере</h1>
        <div style={separatorStyle}>
          <div style={lineStyle}></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={iconStyle}>
            <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
          </svg>
          <div style={lineStyle}></div>
        </div>
        <p style={textStyle}>Год выпуска: XXXX</p>
        <p style={textStyle}>Мощность: n клиентов/день</p>
        <p style={textStyle}>Пробег: n лет</p>
        <p style={textStyle}>Время заряда: n часов</p>
        <p style={textStyle}>Топливо: кофе с пиццой</p>
        <p style={textStyle}>Особенности: -</p>
        <div style={separatorStyle}>
          <div style={lineStyle}></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={iconStyle}>
            <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
          </svg>
          <div style={lineStyle}></div>
        </div>
      </div>
      <div style={containerBottomStyle}>
        <motion.div
          style={marqueeStyle}
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
        >
          {repeatedWords.map((word, index) => (
            <span key={index} style={wordStyle}>
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
