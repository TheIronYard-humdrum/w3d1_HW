
// forEach :: [x], callback ->  undefined
//     map :: [x], callback -> [x]
//  filter :: [x], callback -> [x]
//  reduce :: [x], callback ->  x


///////////////////////////////////////////
///////////////// For Each ////////////////
///////////////////////////////////////////

function forEach(array, callback) {
  for (i in array) {
    callback(array[i])
  }
}

//test

var total = 1
forEach([1,2,3,4], function(a) {total *= a;})
console.assert(total === 24)


///////////////////////////////////////////
////////////////// Reduce /////////////////
///////////////////////////////////////////

function reduce(array, callback){
    for (i in array) {
        array[i] += callback(array[i], array[i]+1)
    }
    return array[array.length-1];
}

// tests
// ---
console.assert(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }) === 24
)

///////////////////////////////////////////
/////////////////// Map ///////////////////
///////////////////////////////////////////


function map(array, callback){
    var answer = [];
    for (i in array) {
      answer.push(callback(array[i]));
    }
    return answer;
}

// tests
// ---
var squares = map([1, 2, 3, 4], function(v){ return v*v })
console.assert(squares[0] === 1)
console.assert(squares[1] === 4)
console.assert(squares[2] === 9)
console.assert(squares[3] === 16)





