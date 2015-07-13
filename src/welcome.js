import {computedFrom} from 'aurelia-framework';

export class Welcome{
  items = [1, 2, 3, 4];

  submit(){
    this.items.splice(3, 1, 5);
    this.items.push(6);
  }
}
