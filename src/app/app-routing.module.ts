import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";


const appRoutes: Routes = [
  {
    path: '', redirectTo: '/recipes', pathMatch: "full"
  },
  {
    path: 'shopping-list', component: ShoppingListComponent , children:
    [
      {
        path: 'shopping-edit', component: ShoppingEditComponent
      }
    ]
  },
  {
    path: 'recipes', component: RecipesComponent, children:
    [
      {
        path: '' , component: RecipeStartComponent
      },
      {
        path: 'new', component: RecipeEditComponent
      },
      {
        path: ':id', component: RecipeDetailComponent
      },

      {
        path: ':id/edit' , component: RecipeEditComponent
      }
    ]
  },
  {
    path: '**', redirectTo: '/recipes'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouting{}
