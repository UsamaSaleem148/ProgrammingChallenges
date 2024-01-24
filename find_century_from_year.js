function solution(year) {
    if (year % 100 === 0)
        return year / 100
    let century = year / 100
    if (century <= 1)
        return 1
    else
        return ((year - (year % 100)) / 100) + 1
}
