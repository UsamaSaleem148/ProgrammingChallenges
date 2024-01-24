var longestPalindrome = function (s) {
    if (!s) return '';
    
    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const lengthOdd = expandAroundCenter(s, i, i);
        const lengthEven = expandAroundCenter(s, i, i + 1);

        const maxLength = Math.max(lengthOdd, lengthEven);

        if (maxLength > end - start) {
            start = i - Math.floor((maxLength - 1) / 2);
            end = i + Math.floor(maxLength / 2);
        }
    }

    return s.substring(start, end + 1);
};

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
};

// Test case 1: Regular case
console.log(longestPalindrome("babad"));  // Expected output: "bab" or "aba"

// Test case 2: Empty string
console.log(longestPalindrome(""));  // Expected output: ""

// Test case 3: Single-character string
console.log(longestPalindrome("a"));  // Expected output: "a"

// Test case 4: Palindrome at the beginning
console.log(longestPalindrome("racecarabc"));  // Expected output: "racecar"

// Test case 5: No palindrome
console.log(longestPalindrome("xyz"));  // Expected output: ""

// Test case 6: String with all distinct characters
console.log(longestPalindrome("abcdefg"));  // Expected output: "a" or "b" or "c" ...

// Test case 7: Palindrome in the middle
console.log(longestPalindrome("abbaabcde"));  // Expected output: "abba"
