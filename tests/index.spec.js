import { addDays, addWorkingDays } from "../src";

describe("Tests for 'addDays' method", () => {
  test("If first argument is not instance of Date object - throws Error", () => {
    expect(() => {
      addDays(123, 1);
    }).toThrow(Error);
    expect(() => {
      addDays(123, 1);
    }).toThrow("First parameter of addDays() fn should be a date!");
  });
  test("If second argument is not type of Number - throws Error", () => {
    expect(() => {
      addDays(new Date(), "test");
    }).toThrow(Error);
    expect(() => {
      addDays(new Date(), "test");
    }).toThrow("Second parameter of addDays() fn should be a number!");
  });
  test("If correct arguments - returns Date object", () => {
    expect(addDays(new Date(1627264800000), 1)).toEqual(
      new Date(1627351200000)
    );
  });
  test("Add to last day of month and year correctly", () => {
    expect(addDays(new Date(1640916000000), 1)).toEqual(
      new Date(1641002400000)
    );
  });
  test("Add a whole year correctly", () => {
    expect(addDays(new Date(1641002400000), 365)).toEqual(
      new Date(1672538400000)
    );
  });
});
describe("Tests for 'addWorkingDays' method", () => {
  test("If first argument is not instance of Date object - throws Error", () => {
    expect(() => {
      addWorkingDays(123, 1);
    }).toThrow(Error);
    expect(() => {
      addWorkingDays(123, 1);
    }).toThrow("First parameter of addDays() fn should be a date!");
  });
  test("If second argument is not type of Number - throws Error", () => {
    expect(() => {
      addWorkingDays(new Date(), "test");
    }).toThrow(Error);
    expect(() => {
      addWorkingDays(new Date(), "test");
    }).toThrow("Second parameter of addDays() fn should be a number!");
  });
  test("If correct arguments - returns Date obj", () => {
    expect(addWorkingDays(new Date(1645668000000), 1)).toEqual(
      new Date(1645754400000)
    );
  });
  test("If weekend - returns Date object correctly", () => {
    expect(addWorkingDays(new Date(1645668000000), 2)).toEqual(
      new Date(1646013600000)
    );
  });
  test("Returns Date object correctly for 10 days", () => {
    expect(addWorkingDays(new Date(1645668000000), 10)).toEqual(
      new Date(1646877600000)
    );
  });
});