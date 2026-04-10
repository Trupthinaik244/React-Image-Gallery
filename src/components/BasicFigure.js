function BasicFigure({ url, caption, onRemove }) {
  return (
    <div className="figure-card">
      <img src={url} alt={caption} />
      <p>{caption}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default BasicFigure;