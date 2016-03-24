import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';


@Component({
  selector: 'new-album',
  outputs: ['onSubmitNewAlbum'],
  template: `

  <h3>AHHHHHHH'd an Album:</h3>

  <input placeholder="Artist" class="col-sm-8 input-lg" #newArtist />
  <input placeholder="Album Name" class="col-sm-8 input-lg" #newAlbumName />
  <input placeholder="Price" class="col-sm-8 input-lg" #newPrice />
  <input placeholder="Genre" class="col-sm-8 input-lg" #newGenre />

  <button
  (click)="addAlbum(newArtist, newAlbumName, newPrice, newGenre)"
  class="btn-success btn-lg add-button">
  Add
  </button>
  `
})
export class NewAlbumComponent {
  public onSubmitNewAlbum: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewAlbum = new EventEmitter();
  }
  addAlbum(userArtist: HTMLInputElement, userAlbumName: HTMLInputElement, userPrice: HTMLInputElement, userGenre: HTMLInputElement){
    this.onSubmitNewAlbum.emit([userArtist.value, userAlbumName.value, userPrice.value, userGenre.value]);

    userArtist.value = "";
    userAlbumName.value = "";
    userPrice.value = "";
    userGenre.value = "";
  }
}
