module.exports = function sum(...rest) {
  if (sum.count === undefined) {
    sum.count = 0;
    sum.result = 0;
  }

  if (rest.length === 0) {
    sum.count = undefined;
    return sum.result;
  }
  var result = rest.reduce(function (sum, current) {
    return sum + current;
  })
  sum.result += result;
  return sum;
}
