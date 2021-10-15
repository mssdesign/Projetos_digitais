import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Coxinha',
      imageUrl: 'https://www.cozinhatecnica.com/wp-content/uploads/2020/08/receita-de-schnitzel.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.sabornamesa.com.br/media/k2/items/cache/1da7a0ac7a34d319d36fde2ba2a083ea_L.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
    {
      id: 'r3',
      title: 'Frango',
      imageUrl: 'https://www.sabornamesa.com.br/media/k2/items/cache/1da7a0ac7a34d319d36fde2ba2a083ea_L.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
    {
      id: 'r4',
      title: 'Macarrão',
      imageUrl: 'https://www.sabornamesa.com.br/media/k2/items/cache/1da7a0ac7a34d319d36fde2ba2a083ea_L.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}

