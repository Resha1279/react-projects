import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  // const [categoryItems, setCategoryItems] = useState(allCategories);

  const categoryItems = ["All", ...new Set(items.map((item) => item.category))];

  const filterMenu = (category) => {
    if (category === "All") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categoryItems={categoryItems} filterMenu={filterMenu} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
