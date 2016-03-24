import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { EditAlbumComponent } from './edit-album.component';
import {NewAlbumComponent} from './new-album.component';
import { Album } from './album.model';
import { CartPipe } from './cart.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  directives: [AlbumComponent, EditAlbumComponent, NewAlbumComponent],
  pipes: [CartPipe],
  template:`

  <select (change)="onChange($event.target.value)">
    <option value="all">Show all</option>
    <option value="inCart">Show Cart Contents</option>
    <option value="notInCart" selected="selected">Show Not in Cart</option>
  </select>

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
  public filterCart: string = "notInCart";

  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
  createAlbum([artist, albumName, price, genre]): void {
    this.albumList.push(
      new Album(artist, albumName, price, genre, this.albumList.length )
    );
  }
  onChange(filterOption) {
    this.filterCart = filterOption;
    console.log(this.filterCart);
  }
}
