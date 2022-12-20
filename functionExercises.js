function ageCalculator(name, yearOfBirth, currentYear) {
  const currentAge = currentYear - yearOfBirth;
  return name + " is " + currentAge + " years old."
}

console.log(ageCalculator("Suzie", 1983, 2015))

function howManyHundreds(num) {
  const remainder = num % 100;
  return (num - remainder) / 100;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return
  }
  return length * width;
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return
  }
  return base * height / 2;
}

function calculateCircleArea(radius) {
  if (radius < 0) {
    return
  }
  return Math.PI * radius * radius;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined