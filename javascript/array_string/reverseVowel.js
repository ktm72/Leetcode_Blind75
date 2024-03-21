/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let result = s.split("");
  let l = 0,
    r = s.length - 1;
  const vowels = "aeiouAEIOU";
  while (l < r) {
    if (!vowels.includes(s[l])) {
      l++;
    }
    if (!vowels.includes(s[r])) {
      r--;
    }
    if (vowels.includes(s[l]) && vowels.includes(s[r])) {
      swap(result, l, r);
      r--;
      l++;
    }
  }
  return result.join("");
};

function swap(s, i1, i2) {
  let temp = s[i1];
  s[i1] = s[i2];
  s[i2] = temp;
  return s;
}

console.log(reverseVowels("Euston saw I was not Sue.")); //euston saw I was not SuE.
console.log(reverseVowels("hello")); //holle
