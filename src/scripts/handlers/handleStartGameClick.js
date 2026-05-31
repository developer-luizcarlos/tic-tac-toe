import * as elements from "../dom/domElements.js";
import { gameData } from "../gameData.js";

export default function handleStartGameClick() {
  if (!gameData.getGameSymbol || !gameData.getMachineSymbol) {
    alert("Please, select a symbol to play.");
    return;
  }

  elements.chooseSymbolScreen.classList.add("choose-symbol-screen--hidden");
  elements.gameScreen.classList.remove("game-screen--hidden");
}
