// Complexity O(n^2)
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

// Complexity O(n)
const twoSumOn = (nums, target) => {
  const ht = {}
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (ht.hasOwnProperty(nums[i])) {
      return [ht[nums[i]], i]
    }
    ht[complement] = i
  }
}

const nums = [2, 7, 11, 15]
const target = 26
console.log(twoSum(nums, target))

const numsOn = [2, 7, 11, 15]
const targetOn = 9
console.log(twoSumOn(numsOn, targetOn))
