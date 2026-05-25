import * as elements from "../dom/domElements.js";
import getGameBoardSegments from "./getGameBoardSegments.js";

/**
 * @returns {Array<number>}
 */
export default function getGameBoardFirstFilledSegment() {
  const segments = getGameBoardSegments();

  const firstFilledSegment = segments.find((segment) => {
    return segment.every((block) => {
      const firstSegmentBlock = segment[0];
      const firstSegmentBlockText = firstSegmentBlock.textContent;

      const isFirstSegmentBlockTextEmpty = firstSegmentBlockText.trim() === "";
      const isCurrentSegmentBlockTextEqualsToFirstSegmentBlockText =
        block.textContent.trim() === firstSegmentBlockText;

      return (
        isCurrentSegmentBlockTextEqualsToFirstSegmentBlockText &&
        !isFirstSegmentBlockTextEmpty
      );
    });
  });

  if (!firstFilledSegment) return [];

  const filledSegmentBlocksIndexes = firstFilledSegment.map((item) => {
    const blockIndex = [...elements.gameBlocks].findIndex(
      (block) => block === item,
    );

    return blockIndex;
  });

  return filledSegmentBlocksIndexes;
}
