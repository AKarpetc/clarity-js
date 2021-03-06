import FromArray from "../src/converters/fromarray";
import ToArray from "../src/converters/toarray";
import { IEvent } from "../types/index";

import * as chai from "chai";
import { getMockEvent } from "./utils";
let assert = chai.assert;

describe("Data Conversion Tests", () => {

  it("validates that conversion works", (done: DoneFn) => {
    let mapObj = {
      country: "USA",
      cities: ["Seattle", "Boston"],
      properties: {
        zoom: 1.5
      }
    };

    let evt: IEvent = getMockEvent();
    evt.state = mapObj;

    let array = ToArray(evt);
    let original = FromArray(array);
    assert.equal(JSON.stringify(evt).length, JSON.stringify(original).length);

    done();
  });

});
