/*
Array<Integer> arrSort(Array<INts> input) -> negatives left, positives right, [Negatives, postitives]
([-5, 3, -10, 8, 1]) -> [-5, -10, 3, 8, 1]
Write a function that takes in an array of numbers and outputs a new array with the negative numbers on the lefts
and the positive numbers on the right.
-sort through the array to find negative numbers,  should be on the lefts side of array (same order as they appeared)

-sort through my array and find postive numbers,  should be on the right side of the array (same order as they appeared) */
function arrSort(input){
 let negative = [];
 let positive = [];
 for( let i = 0; i <= input.length-1; i++){
    if( input[i] < 0 ){
    negative.push(input[i]);
    }else {
    positive.push(input[i]);
    }
 }
 console.log(negative);
 console.log(positive);
 let newArray = negative.concat(positive)
 return newArray;
}

console.log(arrSort([-5, 3, -10, 8, 1]));
