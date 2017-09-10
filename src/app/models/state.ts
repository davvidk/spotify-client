export class State {
     isPlaying: boolean = false;
     playlist: string;
     song: string;

    constructor(obj = {} as State) {
        this.isPlaying = obj.isPlaying;
        this.playlist = obj.playlist;
        this.song = obj.song;
    }
}
