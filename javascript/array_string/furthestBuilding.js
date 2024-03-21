/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  //   let forward = 0;
  //   for (let h = 0; h < heights.length - 1; h++) {
  //     const bricksNeeded = heights[h + 1] - heights[h];
  //     if (bricksNeeded > 0) {
  //       if (bricks > 0 && bricks >= bricksNeeded) {
  //         bricks -= bricksNeeded;
  //       } else if (bricks < bricksNeeded && ladders > 0) {
  //         ladders--;
  //       } else if (bricks < bricksNeeded && ladders === 0) {
  //         return forward;
  //       }
  //     }

  //     forward++;
  //   }

  //   return forward;
  let len = heights.length - 1,
    pq = new MinPriorityQueue({ priority: (x) => x });
  for (let i = 0; i < len; i++) {
    let diff = heights[i + 1] - heights[i];
    if (diff > 0) {
      if (ladders > 0) pq.enqueue(diff), ladders--;
      else if (pq.front() && diff > pq.front().element)
        pq.enqueue(diff), (bricks -= pq.dequeue().element);
      else bricks -= diff;
      if (bricks < 0) return i;
    }
  }
  return len;
};
// console.log(furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2)); // 7
// console.log(furthestBuilding([14, 3, 19, 3], 17, 0)); // 3
//failed for this case
// console.log(furthestBuilding([1, 5, 1, 2, 3, 4, 10000], 4, 1)); // 5
