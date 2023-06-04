// =============Chapter 14-17=============
// Question 1
// var studentNames = [];
// studentNames.push("Maham");

// Question 2
// var studentNames = { names: [] };
// studentNames.names.push("Mahnoor");

// Question 3
// var stringsArray = ["Apple", "Banana", "Mango"];
//  var stringsArray = [];

// Question 4
// var numbersArray = [1, 2, 3, 4, 5];
// var numbersArray=[]
// numbersArray.push(6);
// numbersArray.push(7);
// numbersArray.push(8);

// Question 5
// var booleanArray = [true, false, true, false];
// var booleanArray = [];
// booleanArray.push(true);
// booleanArray.push(false);
// booleanArray.push(true);

// Question 6
// var mixedArray = [9 , "Mango", true , 5,6 ,7  , {name: "Aqsa" , age: 15}];
// var mixedArray = [];
// mixedArray.push(9);
// mixedArray.push("Mango");
// mixedArray.push(true);
// mixedArray.push(5,6,7);
// mixedArray.push({name: "Aqsa", age: 15});

// Question 7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// for (var i = 0; i < qualifications.length; i++) {
//     document.write(qualifications[i] + "<br>");
//   }

// Question 8
// var studentNames = ["Michael","John", "Tony" ];
// var scores = [320, 230, 480];
// var totalMarks = 500;

// for (var i = 0; i < studentNames.length; i++) {
//   var percentage = (scores[i] / totalMarks) * 100;
//   document.write("Name: " + studentNames[i] );
//   document.write("Score: " + scores[i]);
//   document.write("Percentage: " + percentage.toFixed(2));
// }

// Question 9
// ---------a----
// var colors = ["Red", "Green", "Blue"];
// document.write("Original Array: " + colors.join(", ") + "<br><br>");

// var colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(colorToAddBeginning);
// document.write("Updated Array after adding color to the beginning: " + colors.join(", ") + "<br><br>");

// -----------b---------
// var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
// colors.push(colorToAddEnd);
// document.write("Updated Array after adding color to the end: " + colors.join(", ") + "<br><br>");

// -----------c------
// colors.unshift("Purple", "Yellow");
// document.write("Updated Array after adding two colors to the beginning: " + colors.join(", ") + "<br><br>");

// -----------d-------
// colors.shift();
// document.write("Updated Array after deleting the first color: " + colors.join(", ") + "<br><br>");

// --------e--------
// colors.pop();
// document.write("Updated Array after deleting the last color: " + colors.join(", ") + "<br><br>");

// --------f-----
// var indexToAdd = prompt("Enter the index where you want to add a color:");
// var colorToAdd = prompt("Enter the color to add at the specified index:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("Updated Array after adding color at a specified index: " + colors.join(", ") + "<br><br>");

// -----------g-----
// var indexToDelete = prompt("Enter the index from where you want to delete color(s):");
// var numToDelete = prompt("Enter the number of colors to delete:");
// colors.splice(indexToDelete, numToDelete);
// document.write("Updated Array after deleting color(s) from a specified index: " + colors.join(", ") + "<br><br>");

// Question 10
// var arr = [320, 230, 480, 120];
// document.write("Scores of Student: " + arr, "<br>");
// document.write("Ordered Scores of Students: " + arr.sort());


// Question 11
// var cities = ["Karachi","lahore","Islamabad","Quetta","Peshawar"];

// var selectedCities = [];

// for (var i = 0; i < 3; i++) {
//   selectedCities.push(cities[i]);
// }
// console.log("Selected cities:");
// console.log(selectedCities);

// Question 12
// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");

// console.log(singleString);

//Question 13
// var fifoArray = [];

// fifoArray.push("Keyboard");
// fifoArray.push("mouse");
// fifoArray.push("Printer");
// fifoArray.push("monitor");

// console.log(fifoArray.shift());
// console.log(fifoArray.shift()); 
// console.log(fifoArray.shift()); 
// console.log(fifoArray.shift()); 

// Question 14
// var lifoArray = [];

// lifoArray.push("Keyboard");
// lifoArray.push("mouse");
// lifoArray.push("printer");
// lifoArray.push("moniter");

// console.log(lifoArray.pop());
// console.log(lifoArray.pop()); 
// console.log(lifoArray.pop());
// console.log(lifoArray.pop());

// Question 15
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write('<select>');
// for (var i = 0; i < phoneManufacturers.length; i++) {
//   document.write('<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
// }
// document.write('</select>');





   
  








