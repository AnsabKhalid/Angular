import { Ingredient } from "../shared/ingredient.model";

export class Electronic {
    public name: string;
    public amount: number;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, amount: number, desc: string, imagePath: string, ingredients: Ingredient[]) {
            this.name = name;
            this.amount = amount;
            this.description = desc;
            this.imagePath = imagePath;
            this.ingredients = ingredients;
        }
}