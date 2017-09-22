import { MusicService } from './services/music.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlayerControlComponent } from './player-control/player-control.component';
import { DisplayComponent } from './display/display.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
 
@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    PlayerControlComponent,
    DisplayComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
