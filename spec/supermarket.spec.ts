import "jasmine";
import { Item, ShoppingCart } from "../src/supermarket";

describe("Shopping Cart", () => {
  it("Should price an item", () => {
    const subject = new ShoppingCart();
    subject.add(new Item("beans", 0.65));

    expect(subject.total()).toBe(0.65);
  });
});
