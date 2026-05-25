import * as elements from "../dom/domElements.js";
import { gameData } from "../gameData.js";
import hasGameAWinner from "../functions/hasGameAWinner.js";
import getWinner from "../functions/getWinner.js";

export default function handleGameBlockClick(event) {
  const isBlockMarked = event.target.textContent.trim() !== "";

  if (hasGameAWinner()) return;

  if (isBlockMarked) return;

  event.target.textContent = gameData.getGameSymbol;

  gameData.setGameSymbol = gameData.getGameSymbol === "x" ? "o" : "x";

  if (hasGameAWinner()) {
    const winner = getWinner();

    alert(`${winner} wins!`);
  }
}
