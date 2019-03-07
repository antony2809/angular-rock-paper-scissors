import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GameState, GameStateModel } from 'src/app/state/game.state';
import { Observable } from 'rxjs';
import { Play } from 'src/app/state/game.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @Select(GameState.game)
  game$: Observable<GameStateModel>;

  constructor(private store: Store) {}

  play(selection: string) {
    this.store.dispatch(new Play(selection));
  }

  ngOnInit() {}
}
