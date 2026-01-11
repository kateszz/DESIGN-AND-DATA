//create canvas
var svg = d3
  .select("body")
  .append("svg")
  .style("background", "black")
  .attr("width", 600)
  .attr("height", 600);

//create gradient definitions
var defs = svg.append("defs");

var gradient1 = defs
  .append("radialGradient")
  .attr("id", "svgBiggerGradient")
  .attr("cx", "50%")
  .attr("cy", "50%")
  .attr("r", "50%")
  .attr("fx", "50%")
  .attr("fy", "50%");

gradient1
  .append("stop")
  .attr("class", "start")
  .attr("offset", "70%")
  .attr("stop-color", "pink")
  .attr("stop-opacity", 1);

gradient1
  .append("stop")
  .attr("class", "middle")
  .attr("offset", "20%")
  .attr("stop-color", "white")
  .attr("stop-opacity", 1);

gradient1
  .append("stop")
  .attr("class", "end")
  .attr("offset", "100%")
  .attr("stop-color", "black")
  .attr("stop-opacity", 1);

var gradient2 = defs
  .append("radialGradient")
  .attr("id", "svgRadialGradient")
  .attr("cx", "50%")
  .attr("cy", "50%")
  .attr("r", "50%")
  .attr("fx", "50%")
  .attr("fy", "50%");

gradient2
  .append("stop")
  .attr("class", "start")
  .attr("offset", "0%")
  .attr("stop-color", "pink")
  .attr("stop-opacity", 0.8);

gradient2
  .append("stop")
  .attr("class", "")
  .attr("offset", "10%")
  .attr("stop-color", "pink")
  .attr("stop-opacity", 0.5);

gradient2
  .append("stop")
  .attr("class", "")
  .attr("offset", "70%")
  .attr("stop-color", "black")
  .attr("stop-opacity", 0.5);
gradient2
  .append("stop")
  .attr("class", "end")
  .attr("offset", "100%")
  .attr("stop-color", "black")
  .attr("stop-opacity", 0.1);

// function that generates the
// 5 paths originating from the center of the canvas,
// always connecting to 5 random points, deleting previous ones

//how many paths should be in the composition and the interval of changing
const PATH_NUM = 48;
const TIMING = 3000;

//UPDATES
//update 1: they morph into each other instead of deleting the previous, using d3 transition
//the logic is to only have the 5 generated coordinate pairs inside of the for loop, and do the drawing outside,
//and create an array that is already existing before the for loop, and access it after, to get the coordinates

//update 2: added circles that are always at the ends of the paths, in the random coordinate, created a new array that stores
//them called cuurentCircles

function randomLines() {
  //clearing the previous 5 lines from the canvas
  // d3.selectAll("svg > *").remove();

  //creating the array where the generated coordinate pairs will go, accessible outside the for loop as well
  var coordinateStorage = [];

  for (i = 0; i < PATH_NUM; i++) {
    //random coordinate generator, x and y in an array, math.random with conversion to integers
    //and a range, so that coordinates are never closer than 100px to the edge of the canvas
    var randomCoordinates = [];
    randomCoordinates[0] = Math.floor(Math.random() * (500 - 100) + 100);
    randomCoordinates[1] = Math.floor(Math.random() * (500 - 100) + 100);

    //adding the current 5 random coordinate pairs to the coordinateStorage array, as an object, with x and y as keys
    coordinateStorage[i] = {
      x: randomCoordinates[0],
      y: randomCoordinates[1],
    };
  }

  //selecting the current 5 paths on the canvas, and putting their data into the coordinateStorage array (this only works if there are paths already)
  //the .data method connects the 5 objects in the coordinateStorage array, to the 5 paths, ovverwrites the previous coordinates.
  var currentPaths = svg.selectAll("path").data(coordinateStorage);

  //same for circles
  var currentCircles = svg.selectAll("circle").data(coordinateStorage);

  //creating the new paths in the first happening of the function,
  //the .enter means it only puts data where there is empty slot,
  //therefore it wont do anything later on, when theres paths there already, would be nicer maybe to put
  //all of this into an if statement and run this when the currentPaths is empty, and the transition when its not?
  currentPaths
    .enter()
    .append("path")
    .attr("d", function (d) {
      return (
        "M 300, 300 C 305, 305 " +
        (d.x + 10) +
        "," +
        (d.y + 20) +
        " " +
        d.x +
        "," +
        d.y
      );
    })
    .attr("stroke", "url(#svgBiggerGradient)")
    .attr("fill", "none");

  currentCircles
    .enter()
    .append("circle")
    .classed("circles", "true")
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    })
    .attr("r", 10)
    .attr("fill", "url(#svgRadialGradient)");

  //in every case after the first one: transitioning the current 5 paths and circles to the new ones
  currentPaths
    .transition()
    .duration(TIMING)
    .attr("d", function (d) {
      return (
        "M 300, 300 C 305, 305 " +
        (d.x + 10) +
        "," +
        (d.y + 20) +
        " " +
        d.x +
        "," +
        d.y
      );
    });
  currentCircles
    .transition()
    .duration(TIMING)
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    });
}

//calling the drawing function every TIMING seconds
setInterval(() => {
  randomLines();
}, TIMING);
