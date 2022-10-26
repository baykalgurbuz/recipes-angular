import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable} from "@angular/core";
import { Ingredient } from "../shared/ingreadient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
    private recipes:Recipe[] =[
        new Recipe('A Test Recipe','This is simple a test','https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Chicken-chow-mein-7aeec1d.png',[new Ingredient('Meat',1),new Ingredient('French Fires',10)]),
        new Recipe('A Test Recipe2','This is simple a test2','https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Chicken-chow-mein-7aeec1d.png',[new Ingredient('Buns',2),new Ingredient('Meat',1)])
    
      ];
      constructor(private slServer:ShoppingListService){}
      getRecipes(){
        return this.recipes.slice();
      }
      addIngredientsShoppingList(ingredients:Ingredient[]){
        this.slServer.addIngredients(ingredients);
      }
}