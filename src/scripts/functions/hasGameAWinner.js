import getGameBoardFirstFilledSegment from "../functions/getGameBoardFirstFilledSegment.js";

/**
 * @returns {boolean}
 */
export default function hasGameAWinner() {
  if (getGameBoardFirstFilledSegment().length) {
    return true;
  }

  return false;
}
