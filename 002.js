var nh = require('math-lib');

var result = 0;
var series = nh().getFibonacciSeriesUpto(1, 2, 4000000);

series.forEach(function(value) {
  if(value % 2 == 0) {
    result += value;
  }
});

console.log(result);
