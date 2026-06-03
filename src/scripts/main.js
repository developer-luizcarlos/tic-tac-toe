import * as elements from "./dom/domElements.js";
import handleGameBlockClick from "./handlers/handleGameBlockClick.js";
import handleSymbolClick from "./handlers/handleSymbolClick.js";
import handleStartGameClick from "./handlers/handleStartGameClick.js";
import handlePlayAgainBtnClick from "./handlers/handlePlayAgainBtnClick.js";
import handleBtnRestartClick from "./handlers/handleBtnRestartClick.js";
import handleBtnGoBackToChooseMenuClick from "./handlers/handleBtnGoBackToChooseMenuClick.js";

// Events
elements.btnStartGame.addEventListener("click", handleStartGameClick);

elements.gameBlocks.forEach((element) => {
  element.addEventListener("click", handleGameBlockClick);
});

elements.btnGoBackToChooseMenu.addEventListener(
  "click",
  handleBtnGoBackToChooseMenuClick,
);

elements.btnPlayAgain.addEventListener("click", handlePlayAgainBtnClick);

elements.btnRestart.addEventListener("click", handleBtnRestartClick);

elements.symbols.forEach((element) => {
  element.addEventListener("click", handleSymbolClick);
});
