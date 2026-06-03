import * as elements from "../dom/domElements.js";
import { gameData } from "../gameData.js";
import restartGame from "../functions/restartGame.js";

export default function handleBtnGoBackToChooseMenuClick() {
  restartGame();

  gameData.setGameSymbol = undefined;
  gameData.setMachineSymbol = undefined;

  elements.chooseSymbolScreen.classList.remove("choose-symbol-screen--hidden");
  elements.gameScreen.classList.add("game-screen--hidden");

  elements.symbols.forEach((el) => {
    el.classList.remove("symbol--choosen");
  });

  elements.btnPlayAgain.classList.add("btn--hidden");
  elements.btnRestart.classList.add("btn--hidden");
}
