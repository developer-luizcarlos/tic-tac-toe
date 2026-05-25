import * as elements from "../dom/domElements.js";

export default function getGameBoardColumns() {
  const gameBlocks = [...elements.gameBlocks];

  const columns = [
    gameBlocks.filter((_, index) => index === 0 || index === 3 || index === 6),
    gameBlocks.filter((_, index) => index === 1 || index === 4 || index === 7),
    gameBlocks.filter((_, index) => index === 2 || index === 5 || index === 8),
  ];

  return columns;
}
