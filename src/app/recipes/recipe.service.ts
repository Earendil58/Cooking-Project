import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingService) { }


  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty schnitzel',
      'https://www.allrecipes.com/thmb/mmP7TwfbUf4LjFtEjNpPBNaC928=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/78117-wienerschnitzel-ddmfs-3X4-0200-ec06b882b575486ab7398957709413d2.jpg',
      [
        new Ingredient('meet', 1),
        new Ingredient('French Fries', 20)
      ]),

    new Recipe(
      'Big Burger',
      'Super Tasty',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg?quality=90&resize=556,505',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];


  getRecipe(){
    return this.recipes.slice();
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingService.addIngredients(ingredients);
  }

}
