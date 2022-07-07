import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  showImg = true;

  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://thumbs.dreamstime.com/b/toy-train-soft-toys-isolated-white-background-189044745.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://thumbs.dreamstime.com/b/toy-train-soft-toys-isolated-white-background-189044745.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://thumbs.dreamstime.com/b/toy-train-soft-toys-isolated-white-background-189044745.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: 'https://thumbs.dreamstime.com/b/toy-train-soft-toys-isolated-white-background-189044745.jpg'
    },
  ];


  imgLoaded(event: string) {
    console.log({
      event
    })
  }

  toogleShowImg() {
    this.showImg = !this.showImg
  }
}
