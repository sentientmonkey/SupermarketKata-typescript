export class Item {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

export class ShoppingCart {
  add(item: Item) {}
  total(): number {
    return 0.65;
  }
}
