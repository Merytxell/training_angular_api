export class Training {
    id : number;
    name : string;
    description : string;
    price : number;
    quantity : number;
    categoryId: number | undefined;

    constructor(id:number,name:string,description:string,price:number, quantity:number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
};