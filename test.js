function validName(name) {
   name = name.trim();
   const words = name.split(" ");


   if (words.length < 2 || words.length > 3) {
      return false;
   }

   if (words[words.length - 1].includes(".") || words[0][0] === words[0][0].toLowerCase()) {
      return false;
   }

   if (words.length > 2 && !words[1].includes(".") && words[0].includes(".")) {
      return false;
   }

   if (words[0].length === 1 || words.slice(0, -1).some(word => word.includes(".") && word.length > 2)) {
      return false;
   }

   return true;
}


// Testing the function
console.log(validName("A. Kesya")); // true
console.log(validName("A. K. Putri")); // true
console.log(validName("Angelina K. Putri")); // true
console.log(validName("Angelina Kesya Putri")); // true
console.log(validName("Angelina")); // false
console.log(validName("a. Kesya")); // false
console.log(validName("A Kesya")); // false
console.log(validName("A. Kesya Putri")); // false
console.log(validName("A. Kesya P.")); // false
console.log(validName("Angelina. Kesya Putri")); // false