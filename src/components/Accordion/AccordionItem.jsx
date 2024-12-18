import React, { createContext, useContext } from "react";
// import { useAccordionContext } from "./Accordion";

const AccordionItemContext = createContext();

export function useAcordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error(
      "Accordion item related components must be wrapped by <Accordion.Item></Accordion.Item>"
    );
  }

  return ctx;
}

const AccordionItem = ({ id, title, children, className }) => {
  //   const { openItemId, openItem, closeItem, toggleItem } = useAccordionContext();

  //   const isOpen = openItemId === id;

  //   function handleClick() {
  //     // if (isOpen) {
  //     //   closeItem();
  //     // } else {
  //     //   openItem(id);
  //     // }

  //     toggleItem(id);
  //   }

  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>
        {/* <h3 onClick={() => toggleItem(id)}>{title}</h3>

      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div> */}
        {children}
      </li>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
