import matchesRegExp from "./index"

test("works", () => {
  expect(matchesRegExp(/abcd/)("abcde")).toEqual(true);
});
