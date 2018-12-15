import { getWine } from "./index.js";
import moxios from "moxios";

describe("getPosts actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("creates GET_WINE after successfuly fetching wine", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [{ title: "Zdrepceva Krv", country: "Serbia", year: 1990 }]
      });
    });

    const expectedActions = [
      {
        type: "GET_WINES",
        payload: [{ title: "Zdrepceva Krv", country: "Serbia", year: 1990 }]
      }
    ];

    return getWine(1).then(res => {
      // return of async actions
      expect(res.data).toEqual(expectedActions);
    });
  });
});
