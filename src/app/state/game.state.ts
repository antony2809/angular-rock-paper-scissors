import { State, Action, StateContext, Selector } from '@ngxs/store';
import { InitGame } from './game.actions';

export class GameStateModel {
  selectingName: boolean;
  totalGames: number;
  playerName: string;
  playerScore: number;
  computerScore: number;
  selectionList: string[];
}

const initialList = Array.from(Array(30))
  .fill('R', 0, 10)
  .fill('P', 10, 20)
  .fill('S', 20, 30);

@State<GameStateModel>({
  name: 'game',
  defaults: {
    selectingName: true,
    totalGames: 0,
    playerName: null,
    playerScore: 0,
    computerScore: 0,
    selectionList: initialList,
  },
})
export class GameState {
  @Selector()
  static score({ playerScore, computerScore }: GameStateModel) {
    return { playerScore, computerScore };
  }

  @Selector()
  static playerName({ playerName }: GameStateModel) {
    return playerName;
  }

  @Action(InitGame)
  init(ctx: StateContext<GameStateModel>) {
    const state = ctx.getState();
    console.log(state.selectionList);
  }
}
