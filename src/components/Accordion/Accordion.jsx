import React, { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "Accordion related components must be wrapped with <Accordion></Accordion>"
    );
  }

  return ctx;
}

const Accordion = ({ children, className }) => {
  const [openItemId, setOpenItemId] = useState();

  //   function openItem(id) {
  //     setOpenItemId(id);
  //   }

  //   function closeItem() {
  //     setOpenItemId(null);
  //   }

  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const ContextValue = {
    openItemId: openItemId,
    // openItem,
    // closeItem,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={ContextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

export default Accordion;
