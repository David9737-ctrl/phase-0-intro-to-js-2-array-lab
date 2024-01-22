// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

module.exports = { cats, destructivelyAppendCat };

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

module.exports = { cats, destructivelyPrependCat };

function destructivelyRemoveLastCat() {
  cats.pop();
}

module.exports = { cats, destructivelyRemoveLastCat };

function destructivelyRemoveLastCat() {
  cats.pop();
}

module.exports = { cats, destructivelyRemoveLastCat };

function appendCat(name) {
  const newCatsArray = cats.concat(name);
  return newCatsArray;
}

module.exports = { cats, appendCat };

function prependCat(name) {
  const newCatsArray = [name].concat(cats);
  return newCatsArray;
}

module.exports = { cats, prependCat };

function removeLastCat() {
  const newCatsArray = cats.slice(0, -1);
  return newCatsArray;
}
module.exports = { cats, removeLastCat };

function removeFirstCat() {
  const newCatsArray = cats.slice(1);
  return newCatsArray;
}

module.exports = { cats, removeFirstCat };

function destructivelyRemoveFirstCat() {
  cats.shift();
}

module.exports = { cats, destructivelyRemoveFirstCat };
