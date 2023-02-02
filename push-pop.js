var arr1 = ['Shihan', 'Moni'];

/*
    Push Method
*/ 

// by default push() add element at the end of the array 
arr1.push('Tini');
// console.log(arr1);

// Add to the start of an array 
arr1.unshift('SuperStar');
// console.log('Modified Array: '+arr1);

// Add to a specified location
arr1.splice(2, 0, '+');
// console.log('After Splice: '+arr1);


/*
    Pop Method
*/ 

// by default pop() delete last element of the array 
var arr2 = ['Shakib', 'Mash', 'Ash', 'Tamin', 'Shanto'];
var modifiedArr2 = arr2.pop();
// console.log(arr2);
// console.log('Pop from arr2: '+ modifiedArr2);

// Remove the first element of an array with slice
var arr3 = ['Shakib', 'Mash', 'Ash', 'Tamin', 'Shanto'];
var sliceElement = arr3.slice(1);
console.log('After Slice: '+ sliceElement);