import * as elements from "./dom/domElements.js";
import * as gameData from "./gameData.js";
import handleGameBlockClick from "./handlers/handleGameBlockClick.js";

// Events
elements.gameBlocks.forEach((element) => {
  element.addEventListener("click", handleGameBlockClick);
});
