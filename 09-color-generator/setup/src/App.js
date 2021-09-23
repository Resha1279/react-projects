import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (e) {
      setIsError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color genetator</h3>
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              setIsError(false);
            }}
            className={isError ? "error" : null}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((item, index) => {
          return <SingleColor key={index} {...item} hexColor={item.hex} />;
        })}
      </section>
    </>
  );
}

export default App;
