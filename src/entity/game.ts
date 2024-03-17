interface IGame extends IGameState {}

interface IGameState {
  playerAccelerate: boolean;
  playerBrake: boolean;
  playerSteerLeft: boolean;
  playerSteerRight: boolean;
}

export class Game implements IGame {
  playerAccelerate: boolean = false;
  playerBrake: boolean = false;
  playerSteerLeft: boolean = false;
  playerSteerRight: boolean = false;

  constructor() {}

  setState(key: keyof IGameState, state: boolean) {
    this[key] = state;
  }
}
