var fizzBuzz = function(n) {
  let container = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      container.push('FizzBuzz')
    }
    else if (i % 5 === 0) {
      container.push('Buzz')
    }
    else if (i % 3 === 0) {
      container.push('Fizz')
    } else {
      container.push(i.toString())
    }
  }
 return container
};