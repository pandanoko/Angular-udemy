import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'recipe-list',
  templateUrl: 'recipe-list.component.html',
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  isLoading: boolean = false;
  private subscriptions: Subscription = new Subscription(); // Composite subscription

  constructor(
    private recipeService: RecipeService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    // Automatically fetch recipes and subscribe to recipe changes
    this.subscriptions.add(
      this.dataStorageService.fetchRecipes().subscribe({
        next: () => {
          this.isLoading = false;
          // Handle successful fetch here if needed
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Error fetching recipes:', error);
        },
      }),
    );

    // Subscribe to recipe changes
    this.subscriptions.add(
      this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      }),
    );

    // Get initial recipes (if any are already loaded)
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions at once
    this.subscriptions.unsubscribe();
  }
}
