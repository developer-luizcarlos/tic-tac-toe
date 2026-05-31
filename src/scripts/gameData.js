export const gameData = {
  gameSymbol: undefined,
  machineSymbol: undefined,
  get getGameSymbol() {
    return this.gameSymbol;
  },
  get getMachineSymbol() {
    return this.machineSymbol;
  },
  set setGameSymbol(gameSymbol) {
    this.gameSymbol = gameSymbol;
  },
  set setMachineSymbol(machineSymbol) {
    this.machineSymbol = machineSymbol;
  },
};
