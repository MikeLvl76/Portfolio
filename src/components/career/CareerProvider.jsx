import { useState } from "react";
import { CareerContext } from "./CareerContext";

export default function CareerProvider(props) {
  const [expandSections, setExpandSections] = useState({
    section_1: false,
    section_2: false,
    section_3: false,
  });

  return (
    <CareerContext.Provider value={{ expandSections, setExpandSections }}>
      {props.children}
    </CareerContext.Provider>
  );
}
