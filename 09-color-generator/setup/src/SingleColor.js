import React, { useState, useEffect } from "react";

const SingleColor = ({ hexColor, rgb, weight, type }) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(",");
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1500);
    return () => clearInterval(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${type == "shade" && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <h5 className="percent-value">{weight}%</h5>
      <h4 className="color-value">{hexValue}</h4>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
