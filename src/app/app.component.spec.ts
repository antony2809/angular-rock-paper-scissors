import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PresentationComponent } from './views/presentation/presentation.component';
import { GameComponent } from './views/game/game.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule, Store } from '@ngxs/store';
import { GameState } from './state/game.state';
import { StartGame } from './state/game.actions';

export const testConfiguration = {
  declarations: [AppComponent, PresentationComponent, GameComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxsModule.forRoot([GameState]),
  ],
};

describe('AppComponent', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testConfiguration).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rock-paper-scissors'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('rock-paper-scissors');
  });

  it('should render app-presentation when selecting player name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-presentation')).not.toBe(null);
  });

  it('should render app-game when name was set', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    store.dispatch(new StartGame('supermario'));
    store
      .select(state => state.game.playerName)
      .subscribe(_ => {
        fixture.detectChanges();
        expect(compiled.querySelector('app-game')).not.toBe(null);
      });
  });
});
