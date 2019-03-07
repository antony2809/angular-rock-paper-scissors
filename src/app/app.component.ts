import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { GameState } from './state/game.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(GameState.selectingName) selectingName$: Observable<boolean>;

  constructor() {}
  title = 'rock-paper-scissors';
}
