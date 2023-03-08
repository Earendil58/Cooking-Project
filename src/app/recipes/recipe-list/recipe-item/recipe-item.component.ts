import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem : Recipe;


  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  selectedItem(){
    this.recipeService.recipeSelected.emit(this.recipeItem);

  }

}
