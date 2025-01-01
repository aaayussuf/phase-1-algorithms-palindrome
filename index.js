// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Reverse the string and compare it to the original
  return str === str.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("robot"));  // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("level"));  // true
console.log(isPalindrome("hello"));  // false
