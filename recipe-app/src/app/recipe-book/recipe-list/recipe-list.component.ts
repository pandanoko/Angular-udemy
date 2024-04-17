import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: 'recipe-list.component.html',
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] 

  constructor(private recipeService : RecipeService) {}

  ngOnInit(): void {
      this.recipes= this.recipeService.getRecipes();
  }
}
