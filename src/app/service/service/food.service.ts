import { Injectable } from '@angular/core';
import { Food } from '../../Models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return [
      {id:1,name:'Ice Cream 1',price:10,quantity:1,imgUrl:'assets/1.jpg',cookTime:'10 min' },
      {id:2,name:'Ice Cream 2',price:20,quantity:2,imgUrl:'assets/5.jpg',cookTime:'20 min'},
      {id:3,name:'Ice Cream 3',price:30,quantity:3,imgUrl:'assets/6.jpg',cookTime:'30 min' },
               
    ]  }
}
