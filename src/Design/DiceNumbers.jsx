import { v4 as uuidv4 } from "uuid";
import DiceContainer from "./DiceContainer";

const num = [
  { title: "One", num: 1 },
  { title: "Two", num: 2 },
  { title: "Three", num: 3 },
  { title: "Four", num: 4 },
  { title: "Five", num: 5 },
  { title: "Six", num: 6 },
];

function DiceNumbers({ diceHandler }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        cursor: "pointer",
      }}
    >
      <DiceContainer number={number}></DiceContainer>
      {num.map((n) => (
        <div onClick={diceHandler} key={uuidv4()}>
          {n.title}
        </div>
      ))}
    </div>
  );
}

export default DiceNumbers;
