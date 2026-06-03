import * as elements from "../dom/domElements.js";
import restartGame from "../functions/restartGame.js";

export default function handlePlayAgainBtnClick() {
  restartGame();

  elements.btnPlayAgain.classList.add("btn--hidden");
  elements.btnRestart.classList.add("btn--hidden");
}
