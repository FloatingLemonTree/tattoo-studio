import { motion } from "framer-motion";

const Contact = () => {
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

  const words = new Array(100).fill("contact");
  const repeatedWords = [...words, ...words];

  const contentContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "50px 150px",
    backgroundColor: "#1F1B1C",
    gap: "50px", 
  };

  const leftBlockStyle = {
    flex: 3, 
    color: "#F6F3EC",
    paddingRight: "50px", 
    fontFamily: "Dudka, sans-serif",
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
  };

  const rightBlockStyle = {
    width: "400px", 
    height: "400px", 
    position: "relative",
    backgroundColor: "#F6F3EC",
    border: "5px solid #AC8F32", 
    borderRadius: "8px", 
    flexShrink: 0, 
  };

  const titleStyle = {
    color: "#AC8F32", 
    fontSize: "3rem", 
    marginBottom: "10px", 
    fontFamily: "Soledago",
  };

  const footerStyle = {
    width: "100%",
    backgroundColor: "#1F1B1C",
    borderTop: "5px solid #918D8A", 
    padding: "20px 0",
    textAlign: "center",
    position: "absolute", 
    bottom: 0,
  };

  const footerLinksStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
  };

  const footerLinkStyle = {
    color: "#F6F3EC",
    textDecoration: "none",
    fontSize: "1.2rem",
    margin: "0 20px",
  };

  return (
    <div className="content" style={{ backgroundColor: "#1F1B1C", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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

      <div style={contentContainerStyle}>
        <div style={leftBlockStyle}>
          <h2 style={titleStyle}>Контактная информация</h2>
          <p>Телефон: +7 (XXX) XXX-XX-XX</p>
          <p>Email: example@mail.com</p>
          <p>Время работы: Пн-Пт с 10:00 до 19:00</p>
        </div>

        <div style={rightBlockStyle}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A660e7bfd0eba659870e661ac814040e19692041d34066ec0760fcf7171e0d6f1&source=constructor&theme=dark"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>

      <div style={footerStyle}>
        <ul style={footerLinksStyle}>
          <li>
            <a href="src/components/Home.jsx" style={footerLinkStyle}>Главная</a>
          </li>
          <li>
            <a href="src/components/About.jsx" style={footerLinkStyle}>О мастере</a>
          </li>
          <li>
            <a href="src/components/Portfolio.jsx" style={footerLinkStyle}>Портфолио</a>
          </li>
          <li>
            <a href="src/components/Pricing.jsx" style={footerLinkStyle}>Прайс</a>
          </li>
          <li>
            <a href="src/components/FAQ.jsx" style={footerLinkStyle}>Вопросы</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
