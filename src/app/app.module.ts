import { MusicService } from './services/music.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlayerControlComponent } from './player-control/player-control.component';
import { DisplayComponent } from './display/display.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    PlayerControlComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
