import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model'

@Component({
  selector: 'my-app',
  template:`
    <div class="container">
      <h1>Polar Bear Music</h1>
      <h3 *ngFor="#album of albums" (click)="albumSelected(album.name)">
        {{ album.artist }}
      </h3>
    </div>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("The Darkness", "Permission to Land", 14, "Rock", 0),
      new Album("Scissor Sisters", "Ta-Dah", 12, "Pop", 1),
      new Album("Violent Femmes", "Violent Femmes", 13, "Folk Punk", 2),
      new Album("Mean Jeans", "Are you Serious?", 8, "Pizza Punk", 3)
    ];
  }
  albumSelected(clickedAlbum: Album): void{
    console.log(clickedAlbum)
  }
}
