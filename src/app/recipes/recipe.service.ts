import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }


  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://picsum.photos/100/100'),
    new Recipe('A Test 2', 'Another Test', 'https://picsum.photos/100/100')
  ];


  getRecipe(){
    return this.recipes.slice();
  }


}
