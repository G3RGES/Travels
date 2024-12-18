import React, { useState } from "react";

const SearchableList = ({ items, children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResult = items.filter((item) =>
    JSON.stringify(item)
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase())
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search..." onChange={handleChange} />
      <ul>
        {searchResult.map((item, idx) => (
          <li key={idx}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;