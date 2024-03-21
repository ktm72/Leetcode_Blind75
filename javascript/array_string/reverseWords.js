/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(" ")
    .filter((i) => i != "")
    .reverse()
    .join(" ");
};

console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  ")); // "world hello"
console.log(reverseWords("a good   example")); // "example good a"

// var reverseWords = function (s) {
//   const words = s.trim().replaceAll(/\s+/g, " ").split(" ");

//   let reverse = "";
//   for (let i = words.length - 1; i >= 0; i--) {
//     reverse += `${words[i]}${i === 0 ? "" : " "}`;
//   }

//   return reverse;
// };

// var reverseWords = function (s) {
//   const words = s.trim().replaceAll(/\s+/g, " ");

//   return words.split(" ").reverse().join(" ");
// };
