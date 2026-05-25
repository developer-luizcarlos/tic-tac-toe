import * as elements from "../dom/domElements.js";
import hasGameAWinner from "./hasGameAWinner.js";
import getGameBoardFirstFilledSegment from "./getGameBoardFirstFilledSegment.js";

export default function getWinner() {
  if (!hasGameAWinner) return;

  const firstSegmentBlockIndex = getGameBoardFirstFilledSegment()[0];
  const gameBlockAtIndex = [...elements.gameBlocks].find(
    (_, index) => index === firstSegmentBlockIndex,
  );
  const gameBlockSymbol = gameBlockAtIndex.textContent.trim();

  return gameBlockSymbol;
}
