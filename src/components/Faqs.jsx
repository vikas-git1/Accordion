import React, { useState } from "react";
import Accordion from "./Accordion";
import Data from "./data/Data.json";
import "./Faqs.css";
const Faqs = () => {
  const [openAccordianIndex, setOpenAccordianIndex] = useState(null);
  const handleToggel = (index) => {
    setOpenAccordianIndex(openAccordianIndex === index ? null : index);
  };
  return (
    <div className="Faq__Conatiner">
      {Data.map((faq, index) => (
        <Accordion
          key={index}
          faq={faq}
          isOpen={openAccordianIndex === index}
          onToggle={() => handleToggel(index)}
        />
      ))}
    </div>
  );
};

export default Faqs;
