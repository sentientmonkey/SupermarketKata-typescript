export class Item {
  sku: string;
  name: string;
  itemPrice: number;

  constructor(sku: string, name: string, itemPrice: number) {
    this.sku = sku;
    this.name = name;
    this.itemPrice = itemPrice;
  }

  price(quantity: number): number {
    return this.itemPrice * quantity;
  }
}

export class DiscountItem extends Item {
  discountPrice: number;
  discountQuantity: number;

  constructor(
    sku: string,
    name: string,
    itemPrice: number,
    discountPrice: number,
    discountQuantity: number,
  ) {
    super(sku, name, itemPrice);
    this.discountPrice = discountPrice;
    this.discountQuantity = discountQuantity;
  }

  price(quantity: number): number {
    const discounted =
      Math.floor(quantity / this.discountQuantity) * this.discountQuantity;
    const regular = quantity % this.discountQuantity;

    return this.itemPrice * regular + this.discountPrice * discounted;
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

export class CartItem {
  item: Item;
  quantity: number = 1;

  constructor(item: Item) {
    this.item = item;
  }

  price(): number {
    return this.item.price(this.quantity);
  }
}

export class ShoppingCart {
  stock: Stock;
  items: CartItem[] = [];

  constructor(stock: Stock) {
    this.stock = stock;
  }

  scan(sku: string) {
    let cartItem = this.items.find(cartItem => cartItem.item.sku === sku);
    if (!cartItem) {
      const item = this.stock.lookup(sku);
      if (!item) {
        throw new Error(`Could not find ${sku}`);
      }
      cartItem = new CartItem(item);
      this.items.push(cartItem);
    } else {
      cartItem.quantity++;
    }
  }

  total(): number {
    return this.items.reduce((a, b) => a + b.price(), 0);
  }
}
