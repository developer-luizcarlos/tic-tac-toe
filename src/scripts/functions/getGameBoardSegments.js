import getGameBoardColumns from "../functions/getGameBoardColumns.js";
import getGameBoardRows from "../functions/getGameBoardRows.js";
import getGameBoardTransverses from "../functions/getGameBoardTransverses.js";

export default function getGameBoardSegments() {
  const transverses = [
    ...getGameBoardColumns(),
    ...getGameBoardRows(),
    ...getGameBoardTransverses(),
  ];

  return transverses;
}
