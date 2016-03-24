import  { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: "cart",
  pure: false
})
export class CartPipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredCartState = args[0];
    if(desiredCartState === "inCart") {
      return input.filter(function(album) {
        return album.done;
      });
    } else if (desiredCartState === "notInCart") {
      return input.filter(function(album) {
        return !album.inCart;
      });
    } else {
      return input;
    }
  }
}
