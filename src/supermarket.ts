export class Item {
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }
}

export class Stock {
  items: Item[] = [
    new Item("BEAN", "beans", 0.65),
    new Item("SAUS", "sausage", 1.25),
  ];

  lookup(sku: string): Item | undefined {
    return this.items.find(item => item.sku === sku);
  }
}

export class ShoppingCart {
  stock: Stock = new Stock();
  items: Item[] = [];

  scan(sku: string) {
    const item = this.stock.lookup(sku);
    if (item) {
      this.items.push(item);
    }
  }

  total(): number {
    return this.items.reduce((a, b) => a + b.price, 0);
  }
}
