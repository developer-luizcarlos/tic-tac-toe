import { gameData } from "../gameData.js";
import hasGameAWinner from "./hasGameAWinner.js";
import getGameBoardSegments from "./getGameBoardSegments.js";
import * as elements from "../dom/domElements.js";
import isGameEnded from "../functions/isGameEnded.js";
import highlightWinnerSegment from "../functions/highlightWinnerSegment.js";

export default function playMachine() {
  if (isGameEnded()) return;

  const userSymbol = gameData.getGameSymbol;
  const machineSymbol = gameData.machineSymbol;

  const userDoubleMarkedSegment = getSegmentMarkedGivenTimes(2, userSymbol);
  const machineDoubleMarkedSegment = getSegmentMarkedGivenTimes(
    2,
    machineSymbol,
  );

  let blockIndexToBeMarked;

  if (machineDoubleMarkedSegment) {
    const machineUnmarkedBlock = getUnmarkedBlockInSegment(
      machineDoubleMarkedSegment,
    );

    blockIndexToBeMarked = getBlockIndex(machineUnmarkedBlock);
  } else if (userDoubleMarkedSegment) {
    const userUnmarkedBlock = getUnmarkedBlockInSegment(
      userDoubleMarkedSegment,
    );

    blockIndexToBeMarked = getBlockIndex(userUnmarkedBlock);
  } else {
    const randomUnmarkedBlockIndex = getRandomUnmarkedBlockIndex();

    if (randomUnmarkedBlockIndex !== undefined) {
      blockIndexToBeMarked = randomUnmarkedBlockIndex;
    }
  }

  if (blockIndexToBeMarked !== undefined) {
    elements.gameBlocks[blockIndexToBeMarked].textContent = machineSymbol;
  }

  if (isGameEnded()) {
    if (hasGameAWinner()) {
      alert(`${machineSymbol} wins!`);
      highlightWinnerSegment();
    }

    elements.btnPlayAgain.classList.remove("btn--hidden");

    elements.btnRestart.classList.add("btn--hidden");

    return;
  }
}

/**
 * @param {Number} times
 */
function getSegmentMarkedGivenTimes(times, symbol) {
  const segments = getGameBoardSegments();

  const markedSegment = segments.find((segment) => {
    const markedBlocks = segment.filter((block) => {
      return block.textContent.trim() !== "";
    });

    const hasMarkedBlocksSameText = markedBlocks.every((block) => {
      return block.textContent.trim() === symbol;
    });

    return hasMarkedBlocksSameText && markedBlocks.length === times;
  });

  return markedSegment;
}

/**
 * @param {NodeListOf<HTMLElement>}
 */
function getUnmarkedBlockInSegment(segment) {
  return [...segment].find((block) => {
    return block.textContent.trim() === "";
  });
}

/**
 * @param {HTMLElement} block;
 */
function getBlockIndex(block) {
  return [...elements.gameBlocks].findIndex((element) => {
    return element === block;
  });
}

function getRandomUnmarkedBlockIndex() {
  const unmarkedBlocks = [...elements.gameBlocks].filter((block) => {
    return block.textContent.trim() === "";
  });

  const unmarkedBlocksIndexes = unmarkedBlocks.map((block) => {
    return getBlockIndex(block);
  });

  const randomIndex = Math.floor(Math.random() * unmarkedBlocksIndexes.length);
  const randomUnmarkedBlockIndex = unmarkedBlocksIndexes[randomIndex];

  return randomUnmarkedBlockIndex;
}
