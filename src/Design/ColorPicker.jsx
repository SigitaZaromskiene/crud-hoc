function ColorPicker({ colorHandler }) {
  return (
    <div>
      <input type="color" className="input" onClick={colorHandler} />
    </div>
  );
}

export default ColorPicker;
