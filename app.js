import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
import { addAndLogUpper } from './mathModule.js';
import { max_and_multiply } from './mathModule.js';

console.log('Add: ', add(5, 3));  // Test your add function
console.log('Uppercase: ', toUpperCase('hello'));  // Test string manipulation
console.log('Multiply: ', multiply(4, 5));  // Test the default export
console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Test findMax
console.log('Reversed: ', reverseArray([1, 2, 3]));  // Test reverseArray
addAndLogUpper(10, 20);  // Test the new function

max_and_multiply([1, 2, 5, 75, 742, 273]); //testing challange function



