import React, { useRef, useState } from "react";

const SearchableList = ({ items, itemKeyFn, children }) => {
  const lastChange = useRef();

  const [searchTerm, setSearchTerm] = useState("");

  const searchResult = items.filter((item) =>
    JSON.stringify(item)
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase())
  );

  function handleChange(event) {
    if (lastChange.current) {
      lastChange.current = null;

      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      setSearchTerm(event.target.value);
    }, 1000);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search..." onChange={handleChange} />
      <ul>
        {searchResult.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
