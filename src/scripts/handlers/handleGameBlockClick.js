import * as elements from "../dom/domElements.js";
import { gameData } from "../gameData.js";
import hasGameAWinner from "../functions/hasGameAWinner.js";
import getWinner from "../functions/getWinner.js";
import playMachine from "../functions/playMachine.js";
import isGameEndedWithDraw from "../functions/isGameEndedWithDraw.js";
import isGameEnded from "../functions/isGameEnded.js";
import hasGameStarted from "../functions/hasGameStarted.js";

export default function handleGameBlockClick(event) {
  if (isGameEnded()) return;

  const isBlockMarked = event.target.textContent.trim() !== "";

  if (isBlockMarked) return;

  event.target.textContent = gameData.getGameSymbol;

  if (hasGameStarted()) {
    elements.btnRestart.classList.remove("btn--hidden");
  }

  if (isGameEnded()) {
    if (hasGameAWinner()) {
      const winner = getWinner();

      alert(`${winner} wins!`);
    } else if (isGameEndedWithDraw()) {
      alert("Draw");
    }

    elements.btnPlayAgain.classList.remove("btn--hidden");

    elements.btnRestart.classList.add("btn--hidden");

    return;
  }

  playMachine();
}
