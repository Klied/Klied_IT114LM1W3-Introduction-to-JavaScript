// Todo 4.6a Create a function called isPalindrome that checks if the given word is a palindrome
function isPalindrome(word) {
    // Convert the word to lowercase and remove any non-alphanumeric characters
    var cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Reverse the cleanWord and compare it with the original cleanWord
    return cleanWord === cleanWord.split('').reverse().join('');
  }
  
  // Todo 4.6b Set the isPalindrome function as the default export of the module
  module.exports = isPalindrome;
  