import { useState } from "react";

const FAQ = () => {
  const faqs = [
    { question: "Как ухаживать за новой татуировкой?", answer: "Не мочить в течение первых суток, использовать заживляющий крем." },
    { question: "Больно ли делать тату?", answer: "Боль зависит от места нанесения и болевого порога человека." },
    { question: "Сколько времени заживает татуировка?", answer: "Полное заживление занимает 2-4 недели." },
    { question: "Можно ли делать тату летом?", answer: "Да, но важно избегать попадания прямых солнечных лучей и воды." },
    { question: "Какие противопоказания к татуировке?", answer: "Беременность, кожные заболевания, аллергия на пигменты." },
    { question: "Как подготовиться к сеансу татуировки?", answer: "Хорошо выспаться, поесть и не употреблять алкоголь перед сеансом." },
    { question: "Можно ли удалять татуировку?", answer: "Да, лазерное удаление наиболее эффективный метод." },
    { question: "Как выбрать эскиз для тату?", answer: "Выбирайте изображение, которое вам действительно нравится и имеет значение." },
    { question: "Как долго держится цветная татуировка?", answer: "Со временем цвет может немного тускнеть, но правильный уход продлит яркость." },
    { question: "Можно ли приносить свой эскиз?", answer: "Да, мастер поможет адаптировать его под вашу кожу." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    backgroundColor: "#1F1B1C",
    padding: "20px 150px",
  };

  const titleStyle = {
    flex: 1,
    fontSize: "20rem",
    fontWeight: "bold",
    color: "#333333",
    textAlign: "left",
    marginRight: "150px",
    userSelect: "none",
  };

  const listStyle = {
    flex: 2,
    listStyle: "none",
    padding: 0,
    fontFamily: "Dudka, sans-serif",
  };

  const itemStyle = {
    fontSize: "1.5rem",
    color: "#F6F3EC",
    cursor: "pointer",
    transition: "color 0.3s",
  };
  
  const answerStyle = {
    fontSize: "1.2rem",
    color: "#AC8F32",
    maxHeight: "0px",
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out",
  };
  
  const itemHoverStyle = {
    color: "#AC8F32",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>FAQ</h1>
      <ul style={listStyle}>
        {faqs.map((faq, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <div
              style={itemStyle}
              onClick={() => toggleAnswer(index)}
              onMouseEnter={(e) => (e.target.style.color = itemHoverStyle.color)}
              onMouseLeave={(e) => (e.target.style.color = itemStyle.color)}
            >
              {faq.question}
            </div>
            <div
              style={{
                ...answerStyle,
                maxHeight: openIndex === index ? "100px" : "0px",
              }}
            >
              {faq.answer}
            </div>
            <hr style={{ border: "1px solid #AC8F32", margin: "10px 0", width: "100%" }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
