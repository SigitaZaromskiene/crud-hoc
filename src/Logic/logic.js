export const withColor = (Component) => (props) => {
  const colorHandler = (e) => {
    props.setColor(e.target.value);
  };

  return <Component colorHandler={colorHandler} />;
};

export const withNumber = (Component) => (props) => {
  const diceHandler = () => {
    props.setNumber(props.num.num);
  };

  return <Component diceHandler={diceHandler}></Component>;
};
