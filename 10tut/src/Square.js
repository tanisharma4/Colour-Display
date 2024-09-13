import React from 'react';

const Square = ({ colorValue, hexValue, isDarkTest }) => {
  return (
    <section
        className="square"
        style={{backgroundColor: colorValue,
          color: isDarkTest ? "#000" : "#FFF"
        }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Square;
