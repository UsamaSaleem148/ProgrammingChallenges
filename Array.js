function solution(A, K) {
    if (K === A.length) {
        return A
    }
    let originalArray = A

    for (let i = 0; i < A.length; i++) {
        if (i + K < A.length) {
            A[i] = originalArray[i + K]
        } else {
            A[i] = originalArray[((i + K) - A.length) - 1]
        }
    }

    return A
}


solution([1, 2, 3, 4], 2)