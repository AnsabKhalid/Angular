export class Electronic {
    public name: string;
    public price: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, price: string, desc: string,
        imagePath: string) {
            this.name = name;
            this.price = price;
            this.description = desc;
            this.imagePath = imagePath;
        }
}