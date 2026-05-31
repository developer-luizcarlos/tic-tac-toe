import * as elements from "./dom/domElements.js";
import handleGameBlockClick from "./handlers/handleGameBlockClick.js";
import handleSymbolClick from "./handlers/handleSymbolClick.js";
import handleStartGameClick from "./handlers/handleStartGameClick.js";

// Events
elements.btnStartGame.addEventListener("click", handleStartGameClick);

elements.gameBlocks.forEach((element) => {
  element.addEventListener("click", handleGameBlockClick);
});

elements.symbols.forEach((element) => {
  element.addEventListener("click", handleSymbolClick);
});
