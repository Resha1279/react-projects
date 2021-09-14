import React from "react";

const Categories = ({ categoryItems, filterMenu }) => {
  return (
    <section className="btn-container">
      {categoryItems.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
};

export default Categories;
