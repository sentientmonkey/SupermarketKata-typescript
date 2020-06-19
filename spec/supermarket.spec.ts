import "jasmine";
import { Item, ShoppingCart } from "../src/supermarket";

describe("Shopping Cart", () => {
  it("should calculate total for items", () => {
    const subject = buildCart("BEAN", "SAUS");

    expect(subject.total()).toBe(1.9);
  });

  function buildCart(...skus: string[]): ShoppingCart {
    const cart = new ShoppingCart();
    skus.forEach(sku => cart.scan(sku));
    return cart;
  }
});
