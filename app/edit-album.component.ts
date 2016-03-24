import {Component, EventEmitter} from 'angular2/core';
import { Album } from './album.model'

@Component({
  selector: 'edit-album',
  inputs: ['album'],
  template: `
  <div class="album-form main-wrap">
    <h3>Edit Album:</h3>
    <input [(ngModel)]="album.artist" class="col-sm-8 input-lg album-form"/>
    <input [(ngModel)]="album.albumName" class="col-sm-8 input-lg album-form"/>
    <input [(ngModel)]="album.price" class="col-sm-8 input-lg album-form"/>
    <input [(ngModel)]="album.genre" class="col-sm-8 input-lg album-form"/>
  </div>
  `

})
export class EditAlbumComponent {
  public album: Album;
}
