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
  items: Item[];
  constructor(items: Item[]) {
    this.items = items;
  }

  lookup(sku: string): Item | undefined {
    return this.items.find(item => item.sku === sku);
  }
}

export class ShoppingCart {
  stock: Stock;
  items: Item[] = [];

  constructor(stock: Stock) {
    this.stock = stock;
  }

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
