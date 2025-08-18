// Problem 1: Reverse a String
const reversedString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
const result = reversedString("hello");
console.log("Reversed string:", result);

// Problem 2: Count Vowels in a String
const countVowels = (str) => {
  let Count = 0;
  const Vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (Vowels.includes(str[i])) {
      Count++;
    }
  }
  return Count;
};
const result2 = countVowels("programming");
console.log("Vowel Count:", result2);

// Problem 3: Check for Palindrome
const checkPalindrome = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed === str;
};
const result3 = checkPalindrome("noon");
console.log("Palindrome:", result3);

// Problem 4: Find the Maximum Number
const findMaxNum = (nums) => {
  let max = nums[0];
  for (let num of nums) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};
const result4 = findMaxNum([5, 1, 9, 3, 16]);
console.log("Largest Number is", result4);

//Problem 5: Remove Duplicates from an Array
const removeDuplicate = (arr) => {
  const uniqueValue = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueValue.includes(arr[i])) {
      uniqueValue.push(arr[i]);
    }
  }
  return uniqueValue;
};
const result5 = removeDuplicate([1, 1, 1, 2, 5, 7, 6, 8]);
console.log("After removing duplicates", result5);

// Problem 6: Sum of All Numbers in an Array
const sumArray = (nums) => {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
};
const result6 = sumArray([1, 2, 3, 4, 5]);
console.log("Total sum of array is", result6);

// Problem 7: Find Even Numbers in an Array
const findEvenNumber = (nums) => {
  let evenNumber = [];
  for (let num of nums) {
    if (num % 2 === 0) {
      evenNumber.push(num);
    }
  }
  return evenNumber;
};
const result7 = findEvenNumber([1, 2, 3, 4, 5, 6]);
console.log("even numbers are", result7);

// Problem 8: Capitalize First Letter of Each Word
const CapitalizeWords = (str) => {
  const words = str.split(" ");
  const CapitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return CapitalizedWords.join(" ");
};
const result8 = CapitalizeWords("hello world");
console.log("CapitalizedWords", result8);

// Problem 9: Find the Factorial of a Number

const factorial = (nums) => {
  let result = 1;
  for (let i = 1; i <= nums; i++) {
    result *= i;
  }
  return result;
};
const result9 = factorial(5);
console.log("factorial", result9);

// Problem 10: PingPong Challenge

const PingPong = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log("Ping");
    }else if(i % 5 === 0){
        console.log("Pong");
    }
    else if(i % 5 === 0 && i % 3 ===0){
        console.log("PingPong");
    }else{
        console.log(i);
    }
  }
};
 PingPong();
