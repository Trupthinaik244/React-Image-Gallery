import React, { useState } from "react";
import FigureList from "../components/FigureList";


function Pgm5() {
  const [figures, setFigures] = useState([
    {
      id: 1,
      url: "https://picsum.photos/seed/1/200/200",
      caption: "Image 1",
    },
    {
      id: 2,
      url: "https://picsum.photos/seed/2/200/200",
      caption: "Image 2",
    },
  ]);

  const addFigure = () => {
    const newId = figures.length + 1;

    const newFigure = {
      id: newId,
      url: `https://picsum.photos/seed/${newId}/200/200`,
      caption: `Image ${newId}`,
    };

    setFigures([...figures, newFigure]);
  };

  const removeFigure = (id) => {
    setFigures(figures.filter((fig) => fig.id !== id));
  };

  return (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",   // centers horizontally
    }}
  >
    <h1>Image Gallery</h1>

    <button onClick={addFigure}>Add</button>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 200px)",
        gap: "20px",
        justifyContent: "center", // centers grid
        marginTop: "20px"
      }}
    >
      <FigureList
        figures={figures}
        onRemoveFigure={removeFigure}
      />
    </div>
  </div>
);
}

export default Pgm5;