/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return ""; // ababab + ab !== ab + ababab
  }

  const gcdLength = (n1, n2) => {
    if (n2 === 0) return n1;
    return gcdLength(n2, n1 % n2);
  };
  return str1.substring(0, gcdLength(str1.length, str2.length));
}
console.log(gcdOfStrings("ababab", "ab")); //ab
console.log(gcdOfStrings("abcabcabc", "abc")); //abc
console.log(gcdOfStrings("aba", "ab")); //""
