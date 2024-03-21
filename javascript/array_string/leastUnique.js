function findLeastNumOfUniqueInts(arr, k) {
  // Count the frequency of each integer
  const frequencyMap = new Map();
  arr.forEach((num) => frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1));

  // Sort the frequencies in descending order
  const sortedFrequencies = Array.from(frequencyMap.values()).sort(
    (a, b) => b - a
  );

  // Remove elements with the lowest frequencies until k becomes 0
  while (k > 0) {
    const numOfElem = sortedFrequencies[sortedFrequencies.length - 1];
    if (k >= numOfElem) {
      k -= numOfElem; //remove elem
    } else {
      break;
    }
  }

  return sortedFrequencies.length;
}

// Test cases
console.log(findLeastNumOfUniqueInts([5, 5, 4], 1)); // Output: 1
console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3)); // Output: 2
