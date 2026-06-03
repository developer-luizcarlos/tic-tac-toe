import * as elements from "../dom/domElements.js";

export default function restartGame() {
  [...elements.gameBlocks].forEach((el) => {
    el.textContent = "";
    el.classList.remove("game-board__block--highlighted");
  });
}
