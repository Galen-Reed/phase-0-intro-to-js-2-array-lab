// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}
function appendCat(name) {
    let copyCats = cats.slice();
    copyCats.push(name);
    return copyCats;
}
function prependCat(name) {
    let prependCats = cats.slice();
    prependCats.unshift(name);
    return prependCats;
}
function removeLastCat(name) {
    let removeLastCats = cats.slice();
    removeLastCats.pop(name);
    return removeLastCats
}
function removeFirstCat(name) {
    let removeFirstCats = cats.slice();
    removeFirstCats.shift(name);
    return removeFirstCats;
}
