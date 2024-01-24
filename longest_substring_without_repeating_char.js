const lengthOfLongestSubstring = (s) => {
  let charIndexMap = {}

  let left = 0
  let maxLength = 0

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right]
    if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= left) {
      left = charIndexMap[currentChar] + 1
    }

    charIndexMap[currentChar] = right
    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
}

// Test cases
const test1 = 'abcabcbb'
console.log(lengthOfLongestSubstring(test1)) // Should return 3

const test2 = 'bbbbb'
console.log(lengthOfLongestSubstring(test2)) // Should return 1

const test3 = 'pwwkew'
console.log(lengthOfLongestSubstring(test3)) // Should return 3

const test4 = 'abcde'
console.log(lengthOfLongestSubstring(test4)) // Should return 5

const test5 = 'aab'
console.log(lengthOfLongestSubstring(test5)) // Should return 2
