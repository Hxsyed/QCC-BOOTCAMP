var assert = require("assert");
var _ = require("lodash");
var chai = require("chai"),
  expect = chai.expect,
  sinonChai = require("sinon-chai"),
  sinon = require("sinon");

var _ = require("lodash");
const {
  mutateZeroElem,
  pushTrue,
  push,
  printElements,
  unique,
  compare,
  compareArrays,
  compareArraysOpposite,
} = require("./index.js");

chai.should();
chai.use(sinonChai);

describe("ARRAYS", function () {
  describe("example", function () {
    it("given an empty array, it's zeroth element will be 0", function () {
      assert(_.isEqual(mutateZeroElem([]), [0]));
    });
    it("given an array with values, it's zeroth element will be 0", function () {
      assert(_.isEqual(mutateZeroElem([1, 2, 3]), [0, 2, 3]));
    });
  });

  describe("pushTrue", function () {
    beforeEach(function () {
      sinon.spy(Array.prototype, "push");
      // sinon.stub(Array.prototype, 'push');
    });

    afterEach(function () {
      Array.prototype.push.restore();
    });
    it("given an empty array, it will insert true", function () {
      assert(_.isEqual(pushTrue([]), [true]));
    });
    it("given an array with multiple values, it's last element will be true", function () {
      assert(_.isEqual(pushTrue([1, 2, 3]), [1, 2, 3, true]));
    });
    it("does not use array.push()", function () {
      pushTrue([1, 2]);
      assert.equal(Array.prototype.push.getCalls().length, 1);
    });
  });

  describe("push", function () {
    beforeEach(function () {
      sinon.spy(Array.prototype, "push");
      // sinon.stub(Array.prototype, 'push');
    });

    afterEach(function () {
      Array.prototype.push.restore();
    });
    it("given an empty array, it will insert the value", function () {
      assert(_.isEqual(push([], null), [null]));
    });
    it("given an array with multiple values, it's last element will be the given value", function () {
      assert(_.isEqual(push([1, 2, 3], "hello"), [1, 2, 3, "hello"]));
    });
    it("does not use array.push()", function () {
      push([1, 2]);
      assert.equal(Array.prototype.push.getCalls().length, 1);
    });
  });

  describe("printElements", function () {
    beforeEach(function () {
      // sinon.spy(console, 'log');
      sinon.stub(console, "log");
    });

    afterEach(function () {
      console.log.restore();
    });
    it("it console.logs as many times as the length of the array", function () {
      const array = new Array(Math.floor(Math.random() * 100));
      printElements(array);
      assert.equal(console.log.getCalls().length, array.length);
    });
    it("it console.logs every element", function () {
      const array = ["hello", "hi", false, 1];
      printElements(array);
      assert(
        _.isEqual(
          console.log.args.map((el) => el[0]),
          array
        )
      );
    });
  });

  describe("unique", function () {
    beforeEach(function () {
      sinon.spy(Array.prototype, "indexOf");
      // sinon.stub(console, 'log');
    });

    afterEach(function () {
      Array.prototype.indexOf.restore();
    });
    it("returns a new array", function () {
      var array = [];
      assert(unique(array) !== array && Array.isArray(unique(array)));
    });
    it("returns an array with only unique values", function () {
      const array = ["hello", "hi", "hi", false, 1];
      assert(_.isEqual(unique(array), ["hello", "hi", false, 1]));
    });
    it("does not use indexOf", function () {
      unique([1, 2, 2, 2, 3]);
      assert.equal(Array.prototype.indexOf.getCalls().length, 0);
    });
  });

  describe("compare", function () {
    beforeEach(function () {
      sinon.spy(Array.prototype, "indexOf");
      // sinon.stub(console, 'log');
    });

    afterEach(function () {
      Array.prototype.indexOf.restore();
    });
    it("if there is no match it returns false", function () {
      assert.equal(compare(["hello", 1], ["hi", 2]), false);
    });
    it("returns true if there is a match", function () {
      assert(compare(["hello", 1], ["hi", 2, 1]));
    });
    it("does not use indexOf", function () {
      compare([1, 2, 2, 2, 3], [1, 2, 3, 4]);
      assert.equal(Array.prototype.indexOf.getCalls().length, 0);
    });
  });

  describe("compareArrays", function () {
    beforeEach(function () {
      sinon.spy(Array.prototype, "indexOf");
      // sinon.stub(console, 'log');
    });

    afterEach(function () {
      Array.prototype.indexOf.restore();
    });
    it("if there is overlap, return the matching elements", function () {
      assert(_.isEqual(compareArrays(["hello", 1], ["hi", 2, 1]), [1]));
    });
    it("returns an empty array if there is no overlap", function () {
      assert(_.isEqual(compareArrays(["hello", 1], ["hi", 2]), []));
    });
    it("does not use indexOf", function () {
      compareArrays([1, 2, 2, 2, 3], [1, 2, 3, 4]);
      assert.equal(Array.prototype.indexOf.getCalls().length, 0);
    });
  });

  describe("compareArraysOpposite", function () {
    beforeEach(function () {
      sinon.spy(Array.prototype, "indexOf");
      // sinon.stub(console, 'log');
    });

    afterEach(function () {
      Array.prototype.indexOf.restore();
    });
    it("returns empty array [] if all of array1's elements are contained in array2", function () {
      assert(
        _.isEqual(compareArraysOpposite(["hello", 1], ["hello", 1, 2]), [])
      );
    });
    it("returns a new array with elements that are unique to the first array", function () {
      assert(
        _.isEqual(compareArraysOpposite(["hello", 1], ["hi", 2]), ["hello", 1])
      );
    });
    it("does not use indexOf", function () {
      compareArrays([1, 2, 2, 2, 3], [1, 2, 3, 4]);
      assert.equal(Array.prototype.indexOf.getCalls().length, 0);
    });
  });
});

console.log("");
