import * as elements from "../dom/domElements.js";
import { gameData } from "../gameData.js";

export default function handleSymbolClick(event) {
  const symbolEl = event.target;
  const symbolChoosen = symbolEl.textContent.trim();

  const otherSymbolEl = [...elements.symbols].find((el) => el !== symbolEl);
  const otherSymbol = otherSymbolEl.textContent.trim();

  gameData.setGameSymbol = symbolChoosen;
  gameData.setMachineSymbol = otherSymbol;

  symbolEl.classList.add("symbol--choosen");
  otherSymbolEl.classList.remove("symbol--choosen");
}
