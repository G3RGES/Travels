import React from "react";
import { useAccordionContext } from "./Accordion";
import { useAcordionItemContext } from "./AccordionItem";

const AccordionContent = ({ children, className }) => {
  const { openItemId } = useAccordionContext();
  const id = useAcordionItemContext();

  const isOpen = openItemId === id;

  return (
    <div className={isOpen ? `${className ?? ""} open` : `${className} close`}>
      {children}
    </div>
  );
};

export default AccordionContent;
