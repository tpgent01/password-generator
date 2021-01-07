// Rules for setting up a FOR loop
// 1) Initalization and Assignment of our INCREMENTOR-> var i = 0 / (var i = (arr.length - 1)

// 2) Testing Condition (don't end up with an infinite loop)
    //  -> Will evaluate to either TRUE or FALSE

// 3) Modify our INCREMENTOR

// INDEX  [0,  1,  2,   3,  4]
var arr = [10, 20, 30, 40, 50];

console.log(arr.length) // -> 5

// first loop   0 < 5          i = 1
// second time  1 < 5          i = 2
// third time   2 < 5          i = 3
// forth time   3 < 5          i = 4
// fifth time   4 < 5          i = 5
// sixth time   5 < 5  -> FALSE (we break out of our loop)
for(var i = 0; i < arr.length; i++) {
    // as long as our test condition evaluates to TRUE we run the code within our loop
    // code ...
    console.log("Index is: " + i + " - Value is " + arr[i] )
    // at the end of every iteration we run our modify INCREMENTOR code (i++) 
}

// As soon as our TESTING CONDITION is FALSE we exit our loop


console.log("********");
// Let's loop through our array backwards
//       i = 4              4 >= 0
//       i = 0              0 >= 0 
for(var i = arr.length - 1; i >= 0; i--) {
    // as long as our test condition evaluates to TRUE we run the code within our loop
    // code ...
    console.log("Index is: " + i + " - Value is " + arr[i] )
    // at the end of every iteration we run our modify INCREMENTOR code (i++) 
}

// Print the values from 1 - 10
for(var i = 1; i <= 10; i++) {
    console.log(i);
}


for(var i = 0; i < userinput; i++) {
    // var random -> RANDOM function to generate a random number between 1 and Password Length

    // Available Character set ARRAY  array[random]
}