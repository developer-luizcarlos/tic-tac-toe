import * as elements from "../dom/domElements.js";

export default function getGameBoardTransverses() {
  const gameBlocks = [...elements.gameBlocks];

  const transverses = [
    gameBlocks.filter((_, index) => index === 0 || index === 4 || index === 8),
    gameBlocks.filter((_, index) => index === 2 || index === 4 || index === 6),
  ];

  return transverses;
}
