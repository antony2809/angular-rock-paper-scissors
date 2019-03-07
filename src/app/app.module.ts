import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './views/presentation/presentation.component';
import { GameComponent } from './views/game/game.component';
import { GameState } from './state/game.state';

@NgModule({
  declarations: [AppComponent, PresentationComponent, GameComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxsModule.forRoot([GameState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
