import { MusicService } from './../services/music.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

 constructor(private musicSevice: MusicService) { 
 }
  playlists: string[];

  ngOnInit() {
    //This should be an observable
    this.playlists = this.musicSevice.getPlaylists();
  }

}
