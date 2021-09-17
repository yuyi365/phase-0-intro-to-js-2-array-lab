// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    appendCat = [...cats, "Broom"];
    return appendCat;
}
function prependCat(name){
    prependCat = ["Arnold",...cats];
    return prependCat;
}
function removeLastCat(){
    return cats.slice(0,cats.length-1);
}
function removeFirstCat(){
    return cats.slice(1);
}