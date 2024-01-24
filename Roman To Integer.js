/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (1 <= s.length <= 15){
        let I = 1;
        let V = 5;
        let X = 10;
        let L = 50;
        let C = 100;
        let D = 500;
        let M = 1000;

        let array = s.split("");
        let total = 0;
        let toDelete = false;
        let prevNum = 0;
        for (let i = 0; i < array.length; i++) {
            let numberToBeAdded = array[i] === 'I' ? I : 
            array[i] === 'V' ? V :
            array[i] === 'X' ? X :
            array[i] === 'L' ? L :
            array[i] === 'C' ? C :
            array[i] === 'D' ? D :
            array[i] === 'M' ? M : 0

            if (toDelete) {
                toDelete = false;
                let data = numberToBeAdded - prevNum;
                console.log(numberToBeAdded + " - " + prevNum)
                total += data;
                console.log(total + " + " + data)
            }
             else if (
                (array[i] === 'I' && array[i + 1] && array[i + 1] !== 'I') ||
                (array[i] === 'X' && array[i + 1] && array[i + 1] !== 'X' && array[i + 1] !== 'I' && array[i + 1] !== 'V') ||
                (array[i] === 'C' && array[i + 1] && array[i + 1] !== 'C' && array[i + 1] !== 'X' && array[i + 1] !== 'L' && array[i + 1] !== 'V' && array[i + 1] !== 'I')
               ) {
                 toDelete = true;
                 prevNum = numberToBeAdded;
             } else {
                 total += numberToBeAdded;
                 console.log(total + " + " + numberToBeAdded)
             }
        }
        return total;
    } else {
        return 0;
    }
};

console.log(romanToInt("XVI"))