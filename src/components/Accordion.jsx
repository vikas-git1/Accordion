import React from "react";

const Accordion = ({ faq, onToggle, isOpen }) => {
  return (
    <div className="Accordian__container">
      <h2 onClick={onToggle}>
        {faq.question} <span>{isOpen ? "-" : "+"}</span>{" "}
      </h2>
      <p className={isOpen ? "show" : ""}>{faq.answer}</p>
    </div>
  );
};

export default Accordion;
