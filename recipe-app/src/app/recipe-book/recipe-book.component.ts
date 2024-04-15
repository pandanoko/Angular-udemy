import { Component } from '@angular/core'
import { Recipe } from './recipe.model'

@Component({
    selector: 'recipe-book',
    templateUrl: 'recipe-book.component.html'
})

export class RecipeBookComponent {
    selectedRecipe: Recipe;
}
