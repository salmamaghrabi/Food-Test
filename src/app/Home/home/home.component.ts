import { Component, input } from '@angular/core';
import{ faThumbsUp,faClock,faHeart} from '@fortawesome/free-regular-svg-icons';
import { Router } from 'express';
// import { Icategory } from '../../Models/icategory';
// import { Iproduct } from '../../Models/iproduct';
// import { ApiService } from '../../service/service/api.service';
// import { CardService } from '../../service/service/card.service';
import { Food } from '../../Models/food';
import { FoodService } from '../../service/service/food.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
  
})
export class HomeComponent {
  // fontawesome
  faThumbsUp=faThumbsUp
  faClock=faClock
  faHeart=faHeart
// declaration
foods:Food[]=[]; 
constructor(private foodService:FoodService ){}
ngOnInIt():void{
  this.foods=this.foodService.getAll()
}
// public prodList:any;
// constructor(private api:ApiService, private cardService:CardService){}
// ngOnInIt():void{
//   this.api.getProduct().subscribe(res=>{this.prodList=res;})
// }
// addToFav(prod:any){this.cardService.addToFav(prod);}
// ngOnChanges():void{
//   this.prodListOfCat=this.cardService.getProdByCatId(this.sentCatId)
// }
}
