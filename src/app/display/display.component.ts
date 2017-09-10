import { MusicService } from './../services/music.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  song: string;

  constructor(private musicService: MusicService) { 
  }

  ngOnInit() {
    this.musicService.status().subscribe(status => {
      this.song = status.song;
    });
  }

}
