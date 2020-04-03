"use strict";
exports.__esModule = true;
var classes_1 = require("./classes");
var square = new classes_1.Square("Square", 5, "blue");
console.log("Area of " + square.GetName() + " is " + square.GetArea());
console.log("Perimeter of " + square.GetName() + " is " + square.GetPerimeter());
square.PrintColorAndName();
var rectangle = new classes_1.Rectangle("Rectangle", 5, 10);
console.log("Area of " + rectangle.GetName() + " is " + rectangle.GetArea());
console.log("Perimeter of " + rectangle.GetName() + " is " + rectangle.GetPerimeter());
