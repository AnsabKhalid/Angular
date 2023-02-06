// export class Ingredient {
//      public name: string;
//      public amount: number;

// constructor(name: string, amount: number) {
//      this.name = name;
//      this.amount =amount;
//   }
// }

// another method of direct declaration of properties in typescript

export class Ingredient {
    constructor(public name: string, public amount: number) { }
}
