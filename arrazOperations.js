var myArray = ["hello", "my", "name", "is", "Kati"];
var sum = function (x, y) {
  var result = x + y;
  return result;
};
var subtr = function (x, y) {
  var result = x - y;
  return result;
};
//high order and lower order functions
var expression = function (operation1, operation2) {
  var x1 = 10;
  var y1 = 5;
  var x2 = 3;
  var y2 = 1;
  var result = operation1(x1, y1) + operation2(x2, y2);
  return result;
};
//console.log(sum(5, 2));
//console.log(sum(sum(3, 2), sum(5, 7)));
//console.log(expression(sum, subtr));

//iterations
//here the e and n are parameters given by the forEach method, and they are always in this order,
//element and number, or only element if you provide one
myArray.forEach(function (e, n) {
  console.log(e, n);
});
myArray.forEach((e, n) => {
  console.log(e, n);
});

//text scramble trial

// Source - https://stackoverflow.com/a
// Posted by herrstrietzel, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-15, License - CC BY-SA 4.0

let shuffledEls = document.querySelectorAll(".scramble");
let duration = 40;
let framesMax = 16;

shuffledEls.forEach((shuffledEl) => {
  let textOrig = shuffledEl.textContent;
  let inter;

  shuffledEl.addEventListener("mouseover", (e) => {
    let text = e.currentTarget.textContent;
    let charArr = text.split("");
    let frame = 0;

    // shuffle at given speed
    inter = setInterval(() => {
      if (frame < framesMax) {
        let charArrShuff = shuffleArr(charArr);
        shuffledEl.textContent = charArrShuff.join("");
        frame++;
      } else {
        clearInterval(inter);
        shuffledEl.textContent = textOrig;
      }
    }, duration);
  });

  // stop
  shuffledEl.addEventListener("mouseleave", (e) => {
    e.currentTarget.textContent = textOrig;
    clearInterval(inter);
  });
});

function shuffleArr(arr) {
  return arr.reduce(
    ([a, b]) => (
      b.push(...a.splice((Math.random() * a.length) | 0, 1)), [a, b]
    ),
    [[...arr], []]
  )[1];
}

//UFO STUFF
//console.table(data);
// var polishedData = data.map(function (e, n) {
//   var valueAsNumber = parseFloat(e["duration (seconds)"]);
//   e["duration (seconds)"] = valueAsNumber;
//   return e;
// });
// console.log(polishedData);

// var filteredData = polishedData.filter(function (e) {
//   return e["duration (seconds)"] > 60;
// });

var editedData = data
  .map(function (e, n) {
    e["duration (seconds)"] = parseFloat(e["duration (seconds)"]);
    return e;
  })
  .filter(function (e) {
    return e["duration (seconds)"] > 60;
  });

console.log(editedData);

//data interaction interactivity : filter and reduce so that its not that many data at the same tie: compound
