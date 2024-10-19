import { toUpperCase } from './stringModule.js';
import { findMax } from './arrayModule.js';

export function add (n1, n2){
    return (n1 + n2);
 }

export function subtract (n1, n2){
    return(n1 - n2);
 }

export default function multiply(n1, n2) { 
    return (n1 * n2);
 }

export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase('Adding and all caps: '+result.toString()));
 }

export function max_and_multiply (list){
    const product = multiply((findMax(list)) , 5);
    console.log(toUpperCase('This is the max number multiplied 5 and in all caps: '+ product.toString())); 
 }