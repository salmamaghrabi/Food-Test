import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ faThumbsUp,faClock,faHeart} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  faThumbsUp=faThumbsUp
  faClock=faClock
  faHeart=faHeart
  currProdID:number=0;
//   constructor(private activatedRoute: ActivatedRoute){}
//   ngOnInit(): void{
// this.currProdID = Number(this.activatedRoute.snapshot.paramMap.get('pid'))

 // }
}

