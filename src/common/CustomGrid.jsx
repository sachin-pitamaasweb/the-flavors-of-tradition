import React from 'react';
import '../style/CustomGrid.css';


const GridItem = ({ children }) => {
  return <div className="grid-item">{children}</div>;
};

const CustomGrid = ({ children, columns }) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  return <div className="custom-grid" style={gridStyle}>{children}</div>;
};

export { CustomGrid, GridItem };
