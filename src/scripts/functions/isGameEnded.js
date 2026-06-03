import hasGameAWinner from "./hasGameAWinner.js";
import isGameEndedWithDraw from "./isGameEndedWithDraw.js";

/**
 * @returns {boolean}
 */
export default function isGameEnded() {
  return hasGameAWinner() || isGameEndedWithDraw();
}
