import * as elements from "../dom/domElements.js";

/**
 * @returns {boolean}
 */
export default function hasGameStarted() {
  const checkSomeGameBlockWasMarked = [...elements.gameBlocks].some((el) => {
    return el.textContent.trim() !== "";
  });

  return checkSomeGameBlockWasMarked;
}
