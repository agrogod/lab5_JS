function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;
  
  for (const num of arr) {
    currentSum += num;
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) currentSum = 0;
  }
  
  return maxSum;
}

console.log(getMaxSubSum([1, -2, 3, 4, -9, 6])); // 7 (3 + 4)
console.log(getMaxSubSum([-1, -2, -3]));         // 0 (пустий підмасив)
console.log(getMaxSubSum([2, -1, 2, 3, -9]));   // 6 (2 + -1 + 2 + 3)