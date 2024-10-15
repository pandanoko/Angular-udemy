import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "./recipe.service";
import { Recipe } from "../recipe-book/recipe.model";
import { map, tap } from "rxjs/operators";

@Injectable({providedIn: 'root'})

export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http
        .put('https://ng-course-recipe-book-a8fd0-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes)
        .subscribe(
            (data) => {
                console.log(data)
            }
        )
    }

    fetchRecipes() {
        return this.http
        .get<Recipe[]>('https://ng-course-recipe-book-a8fd0-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
        .pipe(
            map(recipe => {
                return recipe.map(recipe => {
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
                });
            }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })
        )
    }
}