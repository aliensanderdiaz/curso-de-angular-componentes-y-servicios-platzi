import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy {

  @Input() img: string = '';
  @Output() imgLoadedOk: EventEmitter<string> = new EventEmitter<string>();
  counter = 0
  counterFn: number | undefined

  constructor() { }

  ngOnInit(): void {
    this.counterFn = window.setInterval(() => {
      this.counter++
      console.log({ counter: this.counter })
    }, 1000)
  }

  ngOnDestroy(): void {
    window.clearInterval(this.counterFn)
  }

  onErrorImg() {
    this.img = 'https://www.w3schools.com/howto/img_avatar.png';
  }

  imgLoaded() {
    this.imgLoadedOk.emit('Imagen Cargada Correctamente.')
  }

}
