import {Square} from "./Square.jsx";
import {TURNS} from "../constants.js";

const TurnedSquare = (props) => {
  return (
    <section className="turn">
      <Square isSelected={props.turn === TURNS.X}>
        {TURNS.X}
      </Square>
      <Square isSelected={props.turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>
  );
}

export default TurnedSquare
