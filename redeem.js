const investment = Number(process.argv[2]);

if (isNaN(investment) || investment < 2) {
  console.log("Please enter a valid investment of at least $2.");
  process.exit();
}

const BOTTLE_COST = 2;
let purchased = Math.floor(investment / BOTTLE_COST);
let totalBottles = purchased;
let fromBottles = 0;
let fromCaps = 0;

let bottles = purchased;
let caps = purchased;

while (bottles >= 2 || caps >= 4) {
  let newFromBottles = Math.floor(bottles / 2);
  let newFromCaps = Math.floor(caps / 4);
  let newTotal = newFromBottles + newFromCaps;

  if (newTotal === 0) break;

  fromBottles += newFromBottles;
  fromCaps += newFromCaps;
  totalBottles += newTotal;

  // Update remaining bottles and caps
  bottles = (bottles % 2) + newTotal;
  caps = (caps % 4) + newTotal;
}

// Final Output
console.log(`\nInvestment: $${investment}`);
console.log(`Total Bottles: ${totalBottles}`);
console.log(`- Bottles Purchased: ${purchased}`);
console.log(`- Bottles from empty bottles: ${fromBottles}`);
console.log(`- Bottles from bottle caps: ${fromCaps}`);
console.log(`Leftover bottles: ${bottles}`);
console.log(`Leftover caps: ${caps}`);