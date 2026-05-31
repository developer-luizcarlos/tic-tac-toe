import * as elements from "../dom/domElements.js";

/**
 * @returns {boolean}
 */
export default function isGameEndedWithDraw() {
  const isAllGameBlocksMarked = [...elements.gameBlocks].every((block) => {
    return block.textContent.trim() !== "";
  });

  return isAllGameBlocksMarked;
}
