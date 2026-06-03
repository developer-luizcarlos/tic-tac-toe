import * as elements from "../dom/domElements.js";
import restartGame from "../functions/restartGame.js";

export default function handleBtnRestartClick() {
  restartGame();

  elements.btnRestart.classList.add("btn--hidden");
}
