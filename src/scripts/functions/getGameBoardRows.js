import * as elements from "../dom/domElements.js";

export default function getGameBoardRows() {
  const gameBlocks = [...elements.gameBlocks];

  const rows = [
    gameBlocks.filter((_, index) => index <= 2),
    gameBlocks.filter((_, index) => index > 2 && index <= 5),
    gameBlocks.filter((_, index) => index > 5 && index <= 8),
  ];

  return rows;
}
