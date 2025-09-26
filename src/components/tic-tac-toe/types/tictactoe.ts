type Player = "X" | "O" | null;

type BoardState = Player[];

type GameState = {
  history: BoardState[];
  step: number;
};

export type { Player, BoardState, GameState };
