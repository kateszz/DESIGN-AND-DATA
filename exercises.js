//takes a b and subtracts smaller one
function subtractSmaller(a, b) {
  return a > b ? a - b : b - a;
}

//Write a function that:
//-Iterates through the array
//-Checks if hello is in the array
//-In case it is, prints “Hi back”
//–> Using only one specific array

greetings = ["ciao", "hello", "moi", "hola", "szia"];

greetings.forEach((greeting) => {
  greeting === "hello" ? console.log("Hi back") : null;
});

//Declare an array of booleans
//Write a function that:
// -Iterates through the array
// -For each element:
//   .Prints “TRUE” if the boolean is true
//   .Prints “FALSE” if the boolean is false

booleanz = [true, false, true, true, false];

function printAnswers(booleanz) {
  for (i = 0; i < booleanz.length; i++) {
    if (booleanz[i] == true) {
      console.log("TRUE");
    } else {
      console.log("FALSE");
    }
  }
}
printAnswers(booleanz);

//Declare an array of integers

//Write a function that:
//-Iterates through the array
//-Prints only the even numbers

integerz = [1, 2, 6, 43, 2, 55, 5, 7, 45, 23];
integerz.forEach((curInteger) => {
  curInteger % 2 == 0 ? console.log(curInteger) : null;
});

//Declare an array of integers
//
//-Iterates through the array
// Write a function that:
//-For each value of the array,
// populates a new array with
// that value only in case it is:
//   .bigger than 5
//   .smaller than 9
//-In case numbers are smaller
// than 5 prints “too small”
//-In case numbers are bigger
// than 9 prints “too big”

function integerFunc() {
  oldIntegArr = [2, 34, 1, 5, 67, 4, 3, 7, 22, 11, 6, 1, 32];
  newIntegArr = [];
  oldIntegArr.forEach((integ) => {
    if (5 < integ && integ < 9) {
      newIntegArr.push(integ);
    } else if (integ < 5) {
      console.log("too small");
    } else if (integ > 9) {
      console.log("too big");
    }
  });
}
integerFunc();
console.log(newIntegArr);

//Declare an array of integers

//Calculate the mean of the array entries

//Write a function that iterates
//through the array and prints ”BIGGER”
//If the current value is bigger then
//the mean, “SMALLER” if the value
//is smaller and “EQUAL” if it is equal

integzForMean = [1, 4, 11, 34, 23, 45, 67];

function meanStuff(integzForMean) {
  mean = integzForMean.reduce((a, b) => a + b, 0) / integzForMean.length;
  console.log(mean);
  integzForMean.forEach((integ) => {
    if (integ > mean) {
      console.log("BIGGER");
    } else if (integ < mean) {
      console.log("SMALLER");
    } else {
      console.log("EQUAL");
    }
  });
}
meanStuff(integzForMean);
