import BasicFigure from "./BasicFigure";

function FigureList({ figures, onRemoveFigure }) {
  return (
    <div className="gallery">
      {figures.map((figure) => (
        <BasicFigure
          key={figure.id}
          url={figure.url}
          caption={figure.caption}
          onRemove={() => onRemoveFigure(figure.id)}
        />
      ))}
    </div>
  );
}

export default FigureList;