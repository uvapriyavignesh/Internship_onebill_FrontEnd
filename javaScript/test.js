// function getname(a, b) {
//   document.write(a + b);
// }
// getname(34, 567);
// var getinit = (function () {
//   document.write(90);
// })();

// function add(a, b, c) {
//   a(b, c);
// }
// function test(a, b) {
//   document.write(a + b);
// }

// add(test, 78, 90);
// document.write("------------------------------");
// document.write(test);

// document.write("------------------------------");
// function find(a) {
//   document.write(a);
// }
// var abi1 = function (a) {
//   find(a);
// };
// abi1(899);
// //find(78);
// //document.write();

// function test(a) {
//   a();
// }

// function sam() {
//   document.write("sample");
// }

//test(sam);

// var arr = [
//   1,
//   "asd",
//   78,
//   "klkjhgghjhgfdfgh",
//   { name1: "rajiiiiiiiiii" },
//   7.90987,
// ];
// for (var index = 0; index < arr.length; index++) {
//   var element = arr[index];
//   if (typeof element === "object") {
//     document.write(element.name1);
//   } else {
//     document.write(element);
//   }

//   document.write("\n");
// }
// var str = "helloooooooo";
// document.write(str.charAt(3));

// var arr = [10, 20, 30, 40, 50];
// arr.map((value) => {
//   return (value += 10);
// });
// console.log(tes);
// var obj1 = [
//   { name1: "raj", age: 30 },
//   { age: 50, major: true },
//   { age: 30, mark: 90 },
// ];
// obj1.map((val, i) => {
//   console.log(val.age);
// });

let month = [
  "January",
  "febrary",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "november",
  "october",
];

let date = new Date("1/2/2022");

console.log(month[date.getMonth()]);
