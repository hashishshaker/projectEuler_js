var mathlib = require('math-lib');

var result = 0;

for (var i = 3; i < 1000 ; i++) {
  if(i % 3 == 0 || i % 5 == 0) {
    result += i;
  }
}

console.log(result);
