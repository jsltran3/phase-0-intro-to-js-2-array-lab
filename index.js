// Write your solution here!
const cats =  ['Milo', "Otis", "Garfield"]; 

function destructivelyAppendCat() {
    cats.push('Ralph');
}

function destructivelyPrependCat() {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop(0);
}

function destructivelyRemoveFirstCat() {
    cats.shift(0);
}

function appendCat() {
    let copyCat = [...cats, 'Broom'];
    return copyCat;
}

function prependCat() {
    let copyCat = ['Arnold', ...cats];
    return copyCat;
}

function removeLastCat() {
    let oneCatMissing = cats.slice(0, -1);
    return oneCatMissing; 
}

// function removeFirstCat() {
//     let oneCatMissing = cats.slice(0, cats.length - 1); 
//     return oneCatMissing; 



function removeFirstCat() {
    let oneCatMissing = cats.slice(1);
    return oneCatMissing; 
}