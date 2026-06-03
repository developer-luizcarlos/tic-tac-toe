import * as elements from "../dom/domElements.js";
import hasGameAWinner from "./hasGameAWinner.js";
import getGameBoardFirstFilledSegment from "./getGameBoardFirstFilledSegment.js";

export default function highlightWinnerSegment() {
  if (!hasGameAWinner()) return;

  const filledSegmentIndex = getGameBoardFirstFilledSegment();

  filledSegmentIndex.forEach((value) => {
    [...elements.gameBlocks][value].classList.add(
      "game-board__block--highlighted",
    );
  });
}
