import { State } from './../models/state';
import { MusicService } from './../services/music.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'player-control',
  templateUrl: './player-control.component.html',
  styleUrls: ['./player-control.component.css']
})
export class PlayerControlComponent implements OnInit {

  constructor(private musicSevice: MusicService) { }

  private subscription: Subscription;

  public status: State;

  songlist: string[] = ['techno songs'];

  ngOnInit() {
    this.status = new State({ isPlaying: false, song: '', playlist: '' });
    this.subscription = this.musicSevice.status().subscribe(status => {
      this.updateState(status);
    });
  }

  public previous() {
    this.musicSevice.previous();
  }

  public play() {
    this.musicSevice.play(this.songlist[0]);
  }

  public pause() {
    this.musicSevice.pause();
  }

  public stop() {
    this.musicSevice.stop();
  }

  public next() {
    this.musicSevice.next();
  }

  private updateState(status: State) {
    this.status = status;
  }

  public isActivePlay(): boolean {
    return !this.status.isPlaying;
  }

  public isActiveStop(): boolean {
    return this.status.isPlaying;
  }

  public isActivePause(): boolean {
    return this.status.isPlaying;
  }

  public isActivePrevious(): boolean {
    return this.status.isPlaying;
  }

  public isActiveNext(): boolean {
    return this.status.isPlaying;
  }

}
