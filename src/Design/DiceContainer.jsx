function DiceContainer({ number, color }) {
  return (
    <div className="dice-container">
      <div
        className={"dice-" + number}
        style={{ fontSize: "72px", color: color }}
      ></div>
    </div>
  );
}

export default DiceContainer;
