import { Component, EventEmitter } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template:`
  <h3>{{ album.artist }}</h3>
  <h5>{{ album.albumName }}</h5>
  <h5>{{ album.price }}</h5>
  <h5>{{ album.genre }}</h5>
  `
})

export class AlbumComponent {
  public album: Album;
}
