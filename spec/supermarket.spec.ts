import "jasmine";
import { Item, ShoppingCart, Stock } from "../src/supermarket";

describe("Shopping Cart", () => {
  it("should calculate total for items", () => {
    const subject = buildCart(
      new Item("BEAN", "beans", 65),
      new Item("SAUS", "sausage", 125),
    );

    expect(subject.total()).toBe(190);
  });

  function buildCart(...items: Item[]): ShoppingCart {
    const stock = new Stock(items);
    const cart = new ShoppingCart(stock);
    items.forEach(item => cart.scan(item.sku));
    return cart;
  }
});
