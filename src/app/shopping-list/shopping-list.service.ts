import { Ingredient } from "../shared/ingreadient.model";
import { Subject } from "rxjs";
import {EventEmitter} from '@angular/core';
export class ShoppingListService{
    ingredientsChanged=new Subject<Ingredient[]>();
   private ingredients:Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tomato',10),
      ];
      getIngredients(){
        return this.ingredients.slice();
      }
      addıngredient(ingredients:Ingredient){
        this.ingredients.push(ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      addIngredients(ingredients:Ingredient[]){
        // for (let ingredient of ingredients) {
        //     this.addIngredients(ingredient);
            
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}