===== MINIMUM =====

function min(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

===== RECURSION =====

function isEven(num) {
  var result = num % 2;
  if (result == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ?? false

===== BEAN COUNTING =====
STEP 1:

function countBs (string) {
  	var counter = 0;
  for (i = 0; i < string.length; i++) {
    if (string.charAt([i]) === "B") {
      counter++};
  }
  return counter
};

STEP 2:

function countBs(string) {
  return countChar(string,"B");
};

function countChar(string, char) {
  	var counter = 0;
  for (i = 0; i < string.length; i++) {
    if (string.charAt([i]) === char) {
      counter++};
  }
  return counter
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
