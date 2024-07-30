// this function is called when the form is submitted <form onsubmit="calculate();">
const calculate = () => {
  const value = document.querySelector("#numbers").value; // to find the number that was entered in the #numbers input field
  const array = value.split(/,\s*/g); // you need to split it into an array of numbers. The .split() method takes a string and splits it into an array of strings. You can pass it a string of characters or a RegEx to use as a separator. For example, string.split(",") would split the string at each comma and return an array of strings. Use the /,\s*/g regex to split the value string by commas. You can tweak it based on the number of spaces separating your values.
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el)); // The value of an input element is always a string, even if the input type is number. You need to convert this array of strings into an array of numbers. To do this, you can use the .map() method. Remember that .map() creates a new array, instead of mutating the original array. // The .map() method takes a callback function as its first argument. This callback function takes a few arguments, but the first one is the current element being processed. The callback function needs to return a value. In this case, you want to return the value of each element converted to a number. You can do this by using the Number() constructor, passing the element as an argument.
  // const filtered = numbers.filter((el) => !isNaN(el)); // chained together to perform multiple operations at once.
  // A user could put any text they want into the input box. You want to make sure that you are only working with numbers. The Number() constructor will return NaN (which stands for "not a number") if the value passed to it cannot be converted to a number. You need to filter these values out – thankfully, arrays have a method specifically for this. The .filter() method will allow you to filter elements out of an array, creating a new array in the process.
  // Much like the .map() method, the .filter() method takes a callback function. The callback function takes the current element as its first argument. The callback function needs to return a Boolean value, which indicates whether the element should be included in the new array. In this case, you want to return true if the element is not NaN (not a number). However, you cannot check for equality here, because NaN is not equal to itself. Instead, you can use the isNaN() method, which returns true if the argument is NaN.
  // Array methods can often be chained together to perform multiple operations at once.
  const mean = getMean(numbers);
  document.querySelector("#mean").textContent = mean; // To display the value of mean
  // If you test your form with a list of numbers, you should see the mean display on the page. However, this only works because freeCodeCamp's iframe has special settings. Normally, when a form is submitted, the event triggers a page refresh. To resolve this, add return false; after your calculate(); call in the onsubmit attribute.
};

// function to get the mean, it is the average value of all numbers in a list.
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;
// const sum = array.reduce((acc, el) => acc + el, 0); // clean this logic up a bit. Using the implicit return of an arrow function
// The first step in calculating the mean is to take the sum of all numbers in the list. Arrays have another method, called .reduce(), which is perfect for this situation. The .reduce() method takes an array and applies a callback function to condense the array into a single value.
// Like the other methods, .reduce() takes a callback. This callback, however, takes at least two parameters. The first is the accumulator, and the second is the current element in the array. The return value for the callback becomes the value of the accumulator on the next iteration.
// The .reduce() method takes a second argument that is used as the initial value of the accumulator. Without a second argument, the .reduce() method uses the first element of the array as the accumulator, which can lead to unexpected results. To be safe, it's best to set an initial value. Set the initial value of the accumulator to 0.
// const mean = sum / array.length; // clean this logic up a bit. Using the implicit return of an arrow function
// The next step in calculating the mean is to divide the sum of numbers by the count of numbers in the list.
// return mean; // clean this logic up a bit. Using the implicit return of an arrow function
// You can actually clean this logic up a bit. Using the implicit return of an arrow function, you can directly return the value of the .reduce() method divided by the length of the array, without having to assign any variables.
