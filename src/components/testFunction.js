const number = [6,3,4,2];
const operator = ["+", "-", "*", "/"];

function generateOperatorCombinations() {
  const combinations = [];

  for (let i = 0; i < operator.length; i++) {
    for (let j = 0; j < operator.length; j++) {
      for (let k = 0; k < operator.length; k++) {
        combinations.push([number[0],operator[i],number[1],operator[j],number[2],operator[k],number[3],]);
      }
    }
  }
  return combinations;
}

const operatorCombinations = generateOperatorCombinations();
const combinationsAsNumber = operatorCombinations.map((combination) =>eval(combination.join("")));
const combinationsAsString = operatorCombinations.map((combination) =>combination.join(""));

console.log(combinationsAsNumber );
console.log(combinationsAsString);

const calculate = (value, solutionExpression) => {
  if (value === 24) {
    console.log(value);
    console.log(solutionExpression);
    return true;
  }
  return false;
};

for(let i = 0; i < combinationsAsNumber.length; i++){
    calculate(combinationsAsNumber[i],combinationsAsString[i])
}
