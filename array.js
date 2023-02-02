var arr1 = ['Shihan', '&', 'Moni'];

// Get the length of an array
console.log('\n'+arr1.length);

// Get the specific element by index
console.log('Second Element: '+ arr1[1]);

// Set Element by index
arr1[1] = ' + ';
console.log('New Array'+ arr1);

// Find index of an Element from an array
var positionIndex = arr1.indexOf('Moni');
console.log('Index of Moni: '+ positionIndex);