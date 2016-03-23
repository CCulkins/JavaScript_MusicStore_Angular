import { Component, EventEmitter } from 'angular2/core';
import { AlbumListComponent } from './album-list.component'
import { Album } from './album.model'

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template:`
    <div class="container">
      <h1>Polar Bear <br> Music Share</h1>
      <album-list
        [albumList]="albums"
        (onAlbumSelect)="albumSelected($event)">
      </album-list>
    </div>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("The Darkness", "Permission to Land", 5, "Rock", 0),
      new Album("Scissor Sisters", "Ta-Dah", 5, "Pop", 1),
      new Album("Violent Femmes", "Violent Femmes", 3, "Folk Punk", 2),
      new Album("Mean Jeans", "Are you Serious?", 2, "Pizza Punk", 3)
    ];
  }
  albumSelected(clickedAlbum: Album): void{
    console.log(clickedAlbum)
  }
}
