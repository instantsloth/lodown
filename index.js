'use strict';

// YOU KNOW WHAT TO DO //

/**
 * 
 * identity: takes a value and returns it unchanged
 * 
 * @param {*} value: single value that can be any datatype
 * 
 * @returns {*}: the input value unchanged
 * 
 */
function identity (value) {
    return value; //return that value unchanged
}
module.exports.identity = identity;

/**
 * 
 * typeOf: takes a value and returns type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
 * 
 * @param {*} value: single value that can be any datatype
 * 
 * @returns {string}: type of <value>
 * 
 */
 
 function typeOf (value) {
    if (value === null) {
        return 'null';
    } else if (Array.isArray(value)) {
        return 'array';
    } else {
        return typeof(value)
    }
}
module.exports.typeOf = typeOf;

/**
 * 
 * first: return the first <number> items of <array>
 * 
 * @param {array} array: an array that is searched through
 * @param {number} number: the first number of items in the array that needs to be returned
 * @returns {array}: an array of the first number of items
 * 
 */
 
function first (array, number) {
let newArray = [];
    if (!Array.isArray(array)) {
//check to see if array is not an array, if it is not, return []
// if number is not a number, return the first element in array
    return []
}if (typeof number !== 'number') {
    return array[0]
} else if (number < 0) {
	return []
} else if (number > array.length) {
	return array
}
else {
	for(let i = 0; i<number; i++) {
	newArray.push(array[i])
} return newArray
}
}
module.exports.first = first;

/**
 * 
 * last: return the last <number> items of <array>
 * 
 * @param {array} array: an array that is searched through
 * @param {number} number: the last number of items in the array that needs to be returned
 * @returns {array}: an array of items returned
 * 
 */
 
function last(array, number) {
    let newArray = []
    if (!Array.isArray) {
        return []
    } else if (typeof number !== 'number') {
        return array[array.length-1]
    } else if (number < 0) {
	return []
    } else if (number > array.length) {
	return array
    } else {
        for (var i = array.length-1; i >= (array.length-number); i--){
        newArray.unshift(array[i])
    } return newArray
    } 
}
module.exports.last = last;

/**
 * 
 * indexOf: Return the index of <array> that is the first occurrance of <value>
 * 
 * @param {array} array: an array that is searched through
 * @param {value} value: the value that is being searched for
 * @returns {number}: the index of the first occurance of value in array
 * 
 */
 
function indexOf (array, value) { //return the index of array, where you first see the value
    for (var i = 0; i <array.length; i++) { //loop through array
    if (array[i] === value) {
        return i
    }
    } return -1
}
module.exports.indexOf = indexOf;

/**
 * 
 * contains: Return true if <array> contains <value>
 * 
 * @param {array} array: an array that is searched through
 * @param {value} value: the value that is being searched for
 * @returns {boolean}: true if the array contains value, false if it does not
 * 
 */
 
function contains(array, value) {
    return (array.includes(value) ? true:false)
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each (collection, func) {
    if (Array.isArray(collection)) {
        for (var i = 0; i <collection.length; i++) {
        func(collection[i], i, collection)
    }
    } else if (typeof collection === 'object') {
        for (var key in collection) {
            func(collection[key], key, collection)
        }
}
}
module.exports.each = each;
/**
 * unique: Return a new array of all elements from <array> with duplicates removed
 * 
 * @param {array} array: The array over which to examine.
 * @returns {array}: unique values from that original array
 */
 

function unique(array){
   //make new array to hold the first instance of all values in array
   let noDup = [];
   //loop through array
   for(let i=0; i < array.length; i++){
      //if the value in the original array is not yet in the new array .push it into the array
      if ( indexOf(noDup, array[i]) === -1){
           noDup.push(array[i]);
       }
   }return noDup
}
module.exports.unique = unique;

/**
 * 
 * filter: calls a function for each element of the array, returns a new array of elements
 * for which the function returns true
 * 
 * @param {Array} array: an array that the function is being applied to
 * @param {Function} action: the function that returns a boolean value
 * @returns {Array}: an array of values that were true for the function called.
 * 
 */

function filter(array, isFunc) {
  let newArray = [];
  each(array, function(value, index, list) {
    if (isFunc(value, index, list)){
        newArray.push(value)};
  });
  return newArray;
}
module.exports.filter = filter;

/**
 * 
 * reject: calls a function for each element of the array, returns a new array of elements
 * for which the function returns false
 * 
 * @param {Array} array: an array that the function is being applied to
 * @param {Function} action: the function that returns a boolean value
 * @returns {Array}: an array of values that were false for the function called.
 * 
 */
 
function reject(bigArray, isFunc) {
   let smallArray = []
   for (var a = 0; a <bigArray.length; a++) {
       smallArray.push(bigArray[a])
   }
  { let newArray = filter(smallArray, isFunc) // returns elements that are 'true'
    for (let i = 0; i<smallArray.length; i++) { //loop through array we are searching
        for (let a = 0; a <newArray.length; a++) {
            if (newArray[a] === smallArray[i]) {
                smallArray.splice(i,1)
            } 
        }
     } return smallArray
}
}
module.exports.reject = reject;
/**
 * 
 * partition: calls a function for each element of the array, returns an array of two sub-arrays:
 * One where all the values for which function returned true
 * One where all the values for which function returned false
 * 
 * @param {Array} array: an array that the function is being applied to
 * @param {Function} action: the function that returns a boolean value
 * @returns {Array}:an array of two sub-arrays:
 * One where all the values for which function returned true
 * One where all the values for which function returned false
 */

function partition(array,func) {
    let partitionArray = [filter(array,func), reject(array,func)]
    return partitionArray;
}
module.exports.partition = partition;

/**
 * 
 * map: calls a function for each element of the collection and passes the arguments:
 *  if array- passes the element, index, and collection as arguments
 *  if object- passes the value, its key, and collection as arguments
 * Then saves the return value of each function call into a new array and returns it
 * 
 * @param {collection} collection: a collection that the function is being applied to
 * @param {Function} action: the function that is performing the action, accepts 3 arguments.
 * @returns {Array}:an array of values of each function call
 */
 
function map(collection, func) {
    let newArray = [];
        if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
        newArray.push(func(collection[i], i, collection))
        //returnArray.push(func(collection[i], i, collection));
        } 
        }else if (typeof collection === 'object') {
        for (var key in collection) {
            newArray.push(func(collection[key], key, collection))
        }
        } return newArray;
}
module.exports.map = map;

/**
 * 
 * pluck: Return an array containing the value of <property> for every element in <array>
 * 
 * @param {array} array: an array of objects that the function is being applied to
 * @param {property} property: the property (or key) that is being looked up in the objects
 * @returns {Array}:an array of values for the key/ property that is being looked up
 */
 
function pluck(collection, property){
    let returnArray = [];
  for(let i=0; i < collection.length; i++) {
           map(collection[i], function(property){
                   if(typeof property === 'string' ){
                     returnArray.push(property)
                   }
        })
} return(returnArray)
 }
module.exports.pluck = pluck;

/**
 * 
 * every: Return a boolean value of true if each and every element of the collection is returned true with the function applied
 * otherwise returns false
 * 
 * @param {collection} collection: a collection that the function is being applied to
 * @param {Function} action: the function that is performing the action, accepts 3 arguments.
 * @returns {Boolean}: True if every element for which the function is called upon is truthy, otherwise false.
 */
 
function every(collection, isFunc) {
    let result = false;
    if (typeof isFunc !== 'function') {
    each(collection, function(value){
        if(value === true){
        result = true;
    };
    })
    return result;}
    result = true
    each(collection, function(value, index, collection) {
        if(!isFunc(value, index, collection)) {
            result = false;
        }
    })
    return result;
}
module.exports.every = every;

/**
 * 
 * some: Return a boolean value of true if ANY element of the collection is returned true with the function applied
 * otherwise returns false
 * 
 * @param {collection} collection: a collection that the function is being applied to
 * @param {Function} action: the function that is performing the action, accepts 3 arguments.
 * @returns {Boolean}: True if ANY element for which the function is called upon is truthy, otherwise false.
 */

function some(collection, func) {
    let result = false;
    if (typeof func !== 'function') {
    each(collection, function(value, index, collection){
        if(value === true){
        result = true;
    };
    })
    return result;}
     each(collection, function(value, index, collection) {
        if (func(value, index, collection)){
            result = true;
        }
   
})
    return result
}
module.exports.some = some;

/**
 * 
 * reduce:  transform an array's / object's properties into one single value or is used to create a single result from a given list of values
 * 
 * @param {array} array: an array that is being reduced
 * @param {Function} action: the function that is performing the action, accepts 3 arguments.
 *  previous result, element, index
 * @param {seed} value: the value that represents the previous result
 *      if there is no previous result, use the first element of the array
 * @returns {value}: returns the return value of the final function call on that array.
 */
 
function reduce(array, isFunc, seed){
    //check to see length of argument
  var seedUndefined = arguments.length < 3;  //will be true if arguments is missing the seed
  each(array, function(value, index, collection){ //for each array, apply this following function
    if(seedUndefined) { //if true (argument missing the seed)
    seedUndefined = false;//change it to false
      seed = value;//and assign the seed to first value
    } else seed = isFunc(seed, value, index, collection); //if argument and contains the seeds
    //assign the seed to the value of the function applied to the seed, value, index, and collection
  });
  return seed; //return the final seed
}
module.exports.reduce = reduce;

/**
 * 
 * extend: merge a bunch of objects into the first object.
 * 
 * @param {object} object: an object that is being updated
 * @param {object} object: the objects that are being copied into the first object
 * @returns {object}: returns the updated first object
 */


function extend(obj1, obj2){
    let args = Array.from(arguments);
    each(args, function(value, index, list) {
        Object.assign(obj1,value)
}) 
return obj1
}

module.exports.extend = extend;