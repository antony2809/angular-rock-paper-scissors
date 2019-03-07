import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { GameState, GameStateModel } from './game.state';
import { Play, StartGame } from './game.actions';

describe('Game actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([GameState])],
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    store.dispatch(new StartGame('supermario'));
    store
      .select(state => state.game.playerName)
      .subscribe((name: string) => {
        expect(name).toBe('supermario');
      });
  });

  it('should increment games when a game is played', () => {
    store.dispatch(new Play('S'));
    store
      .select(state => state.game.totalGames)
      .subscribe((games: number) => {
        expect(games).toBe(1);
      });
  });
});
