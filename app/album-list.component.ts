import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect']
  template:`
  <h3 *ngFor="#currentAlbum of albumList" (click)="albumClicked(currentAlbum.albumName)">
    {{ currentAlbum.artist }}
  </h3>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumList: EventEmitter<Album>;
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    console.log('child', clickedAlbum);
    this.onAlbumSelect.emit(clickedTask);
  }
}
