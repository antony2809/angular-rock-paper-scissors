import { Component } from '@angular/core';
import { shuffle } from './lib/shuffle';
import { Store } from '@ngxs/store';
import { InitGame } from './state/game.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.dispatch(new InitGame());
  }
  title = 'rock-paper-scissors';
}
