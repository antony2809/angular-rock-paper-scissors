import { Component } from '@angular/core';
import { shuffle } from './lib/shuffle';
import { Store, Select } from '@ngxs/store';
import { InitGame } from './state/game.actions';
import { GameState, GameStateModel } from './state/game.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(GameState.selectingName) selectingName$: Observable<boolean>;

  constructor(private store: Store) {
    this.store.dispatch(new InitGame());
  }
  title = 'rock-paper-scissors';
}
