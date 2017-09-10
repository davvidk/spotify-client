import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import { State } from './../models/state';

@Injectable()
export class MusicService {

  constructor() { }

  private static readonly SONG_LIST: string = 'power Songs';
  private songs: string[] = ['Live is Live', 'Today was a good day', 'There will be an angel'];

  private playposition:number = 0;

  private subject = new Subject<State>();

  public previous() {
    if(this.playposition>0)
    {
      this.playposition--;
    }
    const s: State = new State({ playlist: MusicService.SONG_LIST, isPlaying: true, song: this.songs[this.playposition] });
    return this.subject.next(s);
  }

  public play(songlist: string) {
     const s: State = new State({ playlist: MusicService.SONG_LIST, isPlaying: true, song: this.songs[this.playposition] });
    return this.subject.next(s);
  }

  public pause() {
    const s: State = new State({ playlist: MusicService.SONG_LIST, isPlaying: false, song: this.songs[this.playposition] });
    return this.subject.next(s);
  }

  public stop() {
    const s: State = new State({ playlist: MusicService.SONG_LIST, isPlaying: false, song: this.songs[this.playposition] });
    return this.subject.next(s);
  }

  public next() {
    if(this.playposition<2)
    {
      this.playposition++;
    }
    console.log(this.playposition);
    const s: State = new State({ playlist: MusicService.SONG_LIST, isPlaying: true, song: this.songs[this.playposition]});
    return this.subject.next(s);
  }

  public status(): Observable<State> {
    return this.subject.asObservable();
  }

  public getPlaylist(): string[] {
    return [ 'Powersongs', 'Chillout', 'Rock']; 
  }

}
