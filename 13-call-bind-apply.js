function cookDish(ingredient, style) {
    return `${this.name} prepares ${ingredient} in ${style} style!`;
}
console.log(cookDish());

const sharmaKitchen = { name: "Sharma ji's Kitchen" };
const guptaKitchen = { name: "Gupta ji's Kitchen" };

console.log(cookDish.call(sharmaKitchen, "Paneer & Spices", "Muglai"));

const guptaOrder = ["Chole kulche", "Punjabi Dhaba"]

console.log(cookDish.apply(guptaKitchen, guptaOrder));

const bills = [100, 30, 45, 50];

Math.max.apply(null, bills);
Math.min(...bills);

function reportDelivery(location, status) {
    return `${this.name} at ${location}: ${status}`;
}

const deliveryBoy = { name: "Ranveer" };

console.log("Call: ", reportDelivery.call(deliveryBoy, "Lyari", "ORDERED"));
console.log("Apply: ", reportDelivery.apply(deliveryBoy, ["Mars", "PENDING"]));
console.log("Blind: ", reportDelivery.bind(deliveryBoy, "Haridwar", "PLACED"));

const bindReport = reportDelivery.bind(deliveryBoy);
console.log(bindReport("Haridwar", "PLACED"));


