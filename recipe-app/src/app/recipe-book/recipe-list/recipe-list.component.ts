import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs'

import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { DataStorageService } from '../../shared/data-storage.service';


@Component({
  selector: 'recipe-list',
  templateUrl: 'recipe-list.component.html',
})
export class RecipeListComponent implements OnInit, OnDestroy{
  recipes: Recipe[];
  subscription: Subscription; 

  constructor(private recipeService: RecipeService,
              private dataStorageService: DataStorageService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataStorageService.fetchRecipes().subscribe();
      this.subscription = this.recipeService.recipesChanged
        .subscribe(
          (recipes: Recipe[]) => {
            this.recipes = recipes;
          }
        )
      this.recipes= this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
