const dogs = [
  {
    name: "max",
    weight: 10,
    breed: "boston terrier",
    state: "wisconsin",
    color: "black",
  },
  {
    name: "don",
    weight: 90,
    breed: "labrador",
    state: "kansas",
    color: "black",
  },
  {
    name: "shadow",
    weight: 40,
    breed: "labrador",
    state: "wisconsin",
    color: "chocolate",
  },
];

// function getDogNames(dogs, filter) {
//   const [key, value] = filter;
//   return dogs.filter((dog) => dog[key] === value).map((dog) => dog["name"]);
// }

// console.log(getDogNames(dogs, ["color", "black"]));

function getDogNames(dogs, filterFunc) {
  return dogs.filter(filterFunc).map((dog) => dog["name"]);
}

// 이게 filterFunc
const checkWeight = (weight) => (dogs) => dogs["weight"] < weight;

const identity = (field) => (value) => (dog) => dog[field] === value;
const colorCheck = identity("color");
const stateCheck = identity("state");
// console.log(getDogNames(dogs, colorCheck("chocolate")));

function allFilters(dogs, ...checks) {
  return dogs.filter((dog) => checks.every((check) => check(dog)));
  // return dogs.filter(dog =>
}

console.log(allFilters(dogs, colorCheck("black"), stateCheck("wisconsin")));
