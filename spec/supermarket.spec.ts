import "jasmine";
import { Item, DiscountItem, ShoppingCart, Stock } from "../src/supermarket";

describe("Shopping Cart", () => {
  it("should calculate total for items", () => {
    const subject = buildCart(
      new Item("BEANS", "beans", 65),
      new Item("SAUS", "sausage", 125),
    );

    subject.scan("BEANS");
    subject.scan("SAUS");

    expect(subject.total()).toBe(190);
  });

  it("should handle special pricing", () => {
    const subject = buildCart(new DiscountItem("APP", "apples", 30, 25, 3));

    subject.scan("APP");
    subject.scan("APP");
    expect(subject.total()).toBe(60);

    subject.scan("APP");
    expect(subject.total()).toBe(75);
  });

  function buildCart(...items: Item[]): ShoppingCart {
    const stock = new Stock(items);
    const cart = new ShoppingCart(stock);
    return cart;
  }
});
