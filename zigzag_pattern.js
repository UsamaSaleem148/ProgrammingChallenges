function convert(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    const result = Array.from({ length: numRows }, () => '');
    let index = 0;
    let step = 1;

    for (const char of s) {
        result[index] += char;

        if (index === 0) {
            step = 1;
        } else if (index === numRows - 1) {
            step = -1;
        }

        index += step;
    }

    return result.join('');
}

// Example usage:
const s1 = "PAYPALISHIRING";
const numRows1 = 3;
console.log(convert(s1, numRows1));
// Output: "PAHNAPLSIIGYIR"

const s2 = "PAYPALISHIRING";
const numRows2 = 4;
console.log(convert(s2, numRows2));
// Output: "PINALSIGYAHRPI"

const s3 = "A";
const numRows3 = 1;
console.log(convert(s3, numRows3));
// Output: "A"
