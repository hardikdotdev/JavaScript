const carriage = ["Veer", "Ayush", "Ravi"];
const emptyCarriage = [];

const threeEmptySeats = Array(3);
console.log(threeEmptySeats.length);

const passenger = Array("Veer", "Ansh", "Harsh");

const singlePassenger = Array.of(3);
console.log(singlePassenger);

const trainCode = Array.from("DUST");
console.log(trainCode);

const tempTrain = ["A", "B", "C", "D", "E"];
tempTrain.length = 3;
console.log(tempTrain);
tempTrain.length = 5;
console.log(tempTrain);

console.log(typeof []);
console.log(Array.isArray([]));
console.log(Array.isArray("Harsh"));

//key points:
// 1. [], Array(4)
// 2. array are 0 based
// 3. Mutating methods: push pop, shift, unshift, splice
// 4. Non Mutating: concat, slice, flat, flatmap 
// 5. Searching: indexOf, includes, find, findIndex
// 6. Array.isArray()