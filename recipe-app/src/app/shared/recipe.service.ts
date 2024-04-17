import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipe-book/recipe.model";

export class RecipeService  {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Test Recipe2',
          'Test description',
          'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
        new Recipe(
          'Test Recipe',
          'Test description',
          'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}