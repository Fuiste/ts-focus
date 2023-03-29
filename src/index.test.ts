import { add } from ".";

describe(add, () => {
  it("adds numbers", () => {
    expect(add(2)(3)).toBe(5);
  });
});
