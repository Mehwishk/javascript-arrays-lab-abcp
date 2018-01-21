const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
   kittens.push(name);
   return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
 var newEnd = [...kittens];
 newEnd.push(name);
 return newEnd; 
}

function prependKitten(name){
  var newBeg = [...kittens];
  newBeg.unshift(name);
  return newBeg;
}

function removeLastKitten(){
var newLast = [...kittens];
newLast.pop();
return newLast;
}
function removeFirstKitten (){
<<<<<<< HEAD
  var newFirst= [...kittens];
=======
   newFirst= [...kittens];
>>>>>>> 2daa4ffa9c94da72216ad6c2f6864165d15d1b22
  newFirst.shift();
  return newFirst;
}