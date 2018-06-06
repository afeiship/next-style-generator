var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-style-generator');

describe('next/styleGenerator', function () {

  it('nx.styleGenerator generate for list', function () {
    var list = [1, 2, 3, 4, 5, 6, 10];

    var result = nx.styleGenerator(list, (key, value) => {
      return {
        key: `blank${value}`,
        value
      };
    });

    // console.log(result);

    assert.equal(result.blank1, 1);
    assert.equal(result.blank4, 4);
    assert.equal(result.blank10, 10);
  });


  it('nx.styleGenerator generate for map', function () {
    var map = {
      e: '#eee',
      0: '#000',
      f: '#fff',
      primary: '#F60'
    };

    var result = nx.styleGenerator(map, (key, value) => {
      return {
        key: `c_${key}`,
        value: {
          color: value
        }
      };
    });

    // console.log(result);

    assert.equal(result.c_e.color, '#eee');
  });

});
