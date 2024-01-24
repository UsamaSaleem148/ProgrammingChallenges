
function solution(N) {
    let bGap = 0
    let number = N.toString(2)
    if (!number.includes(0)) {
        return bGap
    }

    return recursive(number, 0)
}

function recursive(number, bGap) {
    let indexOfZero = number.indexOf(0)
    let newNum = number.substr(indexOfZero, number.length)
    let distanceBetween = newNum.indexOf(1)
    if (distanceBetween === -1 && bGap === 0) {
        return bGap
    }
    else if (newNum.substr(distanceBetween + 1, newNum.length).includes(0) && distanceBetween > bGap) {
        bGap = distanceBetween
        return recursive(newNum.substr(distanceBetween + 1, newNum.length), bGap)
    }
    return bGap
}
