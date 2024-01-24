def isPalindrome(x):
    data = str(x)[::-1]
    return str(x) == data
print(isPalindrome(121))