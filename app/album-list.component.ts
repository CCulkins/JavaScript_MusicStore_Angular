import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { EditAlbumComponent } from './edit-album.component';
import {NewAlbumComponent} from './new-album.component';
import { Album } from './album.model';


@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  directives: [AlbumComponent, EditAlbumComponent, NewAlbumComponent],
  template:`
  <album-display *ngFor="#currentAlbum of albumList"
    (click)="albumClicked(currentAlbum)"
    [class.selected]="currentAlbum === selectedAlbum"
    [album]="currentAlbum">
  </album-display>
  <edit-album *ngIf="selectedAlbum" [album]="selectedAlbum">
  </edit-album>
  <new-album (onSubmitNewAlbum)="createAlbum($event)">
  </new-album>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
  createAlbum([artist, albumName, price, genre]) :void {
    this.albumList.push(
      new Album(artist, albumName, price, genre, this.albumList.length )
    );
  }
}
