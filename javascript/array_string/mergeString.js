/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
  const w1 = word1.length;
  const w2 = word2.length;
  const max = Math.max(w1, w2);
  let mergedString = "";
  for (let i = 0; i < max; i++) {
    if (i < w1) {
      mergedString += word1[i];
    }
    if (i < w2) {
      mergedString += word2[i];
    }
  }

  return mergedString;
};

console.log(mergeAlternately("ab", "pqrs")); //apbqrs
console.log(mergeAlternately("abcd", "pq")); //apbqcd
console.log(mergeAlternately("abc", "efg")); //aebfcg

// var mergeAlternately = function (word1, word2) {
//   const w1 = word1.length;
//   const w2 = word2.length;
//   const min = Math.min(w1, w2);
//   const mergedLen = min * 2;
//   const totalLen = w1 + w2;
//   let mergedString = "";
//   for (let i = 0; i < totalLen; i++) {
//     if (i < mergedLen) {
//       if (i % 2 !== 0) {
//         mergedString += word2[(i - 1) / 2]; //word2 index -> at merged 2n+1. Oppositely, for word2[(n-1) / 2]
//       }
//       if (i % 2 == 0) {
//         mergedString += word1[i / 2]; //word1 index -> at merged 2n. Oppositely, for word1[n/ 2]
//       }
//     } else {
//       if (w1 > min) {
//         mergedString += word1[i - min];
//       }
//       if (w2 > min) {
//         mergedString += word2[i - min];
//       }
//     }
//   }

//   return mergedString;
// };
