import { State, Action, StateContext, Selector } from '@ngxs/store';
import { StartGame, Play } from './game.actions';
import { shuffle } from '../lib/shuffle';

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

const enemies = {
  R: 'P',
  P: 'S',
  S: 'R',
};

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
  static game(state: GameStateModel) {
    return state;
  }

  @Selector()
  static selectingName({ selectingName }: GameStateModel) {
    return selectingName;
  }

  @Action(StartGame)
  startGame(ctx: StateContext<GameStateModel>, action: StartGame) {
    ctx.patchState({
      selectingName: false,
      playerName: action.name.toLowerCase(),
    });
  }

  @Action(Play)
  play(ctx: StateContext<GameStateModel>, action: Play) {
    const state = ctx.getState();
    const list = shuffle(state.selectionList);
    const loseAgainst = enemies[action.input];
    list.pop();
    list.push(loseAgainst);
    const result = list[Math.floor(Math.random() * list.length)];
    switch (`${action.input}${result}`) {
      case 'RR':
      case 'PP':
      case 'SS':
        alert('That was a tie 😃');
        break;
      case 'RS':
      case 'SP':
      case 'PR':
        alert('👨 Player wins');
        state.playerScore++;
        break;

      default:
        alert('🤖 Computer wins');
        state.computerScore++;
        break;
    }

    state.totalGames++;
    state.selectionList = list;
    ctx.patchState(state);
  }
}
