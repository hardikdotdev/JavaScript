const castleGuards = 5;
const hasKey = false;

if (castleGuards > 0) {
    console.log("Castle is protected, guards: ", castleGuards);
}

if (hasKey) {
    console.log("Gate opened");
} else {
    console.log("Gate locked, key not found");
}

const playerLevel = 35;

if (playerLevel >= 50) {
    console.log("Rank: Legend");
} else if (playerLevel >= 30) {
    console.log("Rank: Warrior");
} else {
    console.log("Rank: Beginner");
}

const goldCoins = 120;
const hasMap = true;

if (goldCoins >= 100 && hasMap) {
    console.log("Treasure hunt can start");
}

const chosenPath = "left";

switch (chosenPath) {
    case "right":
        console.log("User selected right");
        break;
    case "top":
        console.log("User selected top");
        break;
    case "left":
        console.log("User selected left");
        break;
    default:
        console.log("Jiska koi nhi hota, uska default hota h");
}

const heroHP = 40;
const heroStatus = heroHP > 50 ? "Healthy" : "Needs potion";
console.log("Hero status:", heroStatus);