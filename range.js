function range(start, end, step) {
  let numbers = [];
  if (start > end || step <= 0) {
    return numbers;
  }else if (typeof(start) !== "undefined" && typeof(end) !== "undefined" && typeof(step) !== "undefined") {
    for (let i = start; i <= end; i = i + step) {
      numbers.push(i);
    }
    return numbers
  } else {
    return numbers;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));