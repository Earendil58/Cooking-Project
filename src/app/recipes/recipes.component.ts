import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipeGrandfather: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedGrandFather(event){
    console.log('este es el abuelo-recipe',event);
    this.selectedRecipeGrandfather = event;
  }


}
