(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.styleGenerator = function (inTarget, inCallback) {
    var result = {};
    nx.each(inTarget, function (key, value) {
      var pairs = inCallback(key, value);
      result[pairs.key] = pairs.value;
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.styleGenerator;
  }

}());
