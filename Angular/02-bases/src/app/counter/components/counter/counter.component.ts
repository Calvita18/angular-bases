import {Component} from '@angular/core';



@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>

  `
})

export class CounterComponent{
  public title:string = 'Hola Mundo';
  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  }

  reset(){
    this.counter = 10;
  }
}
