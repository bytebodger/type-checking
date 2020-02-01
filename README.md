# Type-Checking(ish)

This is a small utility class that provides for quick checking of scalar values in JavaScript.


## Usage

All of the code is in `is.js`.  Because you can never theoretically know exactly how other future developers will choose to invoke your methods, I feel it's good practice to always check the *types* of values that have been passed into a method.

It contains a series of simple Boolean checks to determine whether a value is of a given type.  These are then used as such (example shown is in React - but the same could be done in "regular" JavaScript):

    import is from './is';
    import React from 'react';
    
    export default class Foo extends React.Component {
       iterateOverThisArray(appendMessageToOutput = '', array = []) {
          if (!is.anArray(array) || !is.aPopulatedString(appendMessageToOutput)) return;
          array.forEach(element => `${element} ${appendMessageToOutput}`);
       }
    
       render() {
          return null;
       }
    }
