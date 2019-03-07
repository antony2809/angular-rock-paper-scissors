import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { StartGame } from 'src/app/state/game.actions';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  name = new FormControl('', Validators.compose([Validators.required, Validators.maxLength(12)]));

  constructor(private store: Store) {}

  startGame() {
    this.store.dispatch(new StartGame(this.name.value));
  }

  ngOnInit() {}
}
