import React from "react";
import { useAccordionContext } from "./Accordion";
import { useAcordionItemContext } from "./AccordionItem";

const AccordionTitle = ({ children, className }) => {
  const { toggleItem } = useAccordionContext();
  const id = useAcordionItemContext();

  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
};

export default AccordionTitle;
