import { Component, EventEmitter } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template:`
  <div class="main-wrap album-info">
    <h3>{{ album.artist }}</h3>
    <h5>{{ album.albumName }}</h5>
    <h5>{{ "$" + album.price + ".00" }}</h5>
    <h5>{{ album.genre }}</h5>
    <label>Add to Cart</label>
    <input *ngIf="album.inCart" type="checkbox" checked (click)="toggleCart(false)"/>
    <input *ngIf="!album.inCart" type="checkbox" checked (click)="toggleCart(true)"/>
  </div>
  `
})

export class AlbumComponent {
  public album: Album;
  toggleCart(setState: boolean){
    this.album.inCart = setState;
  }
}
