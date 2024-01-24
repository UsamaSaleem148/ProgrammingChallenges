def truncateSentence(s, k):
    """
    :type s: str
    :type k: int
    :rtype: str
    """
    s = s.split(" ")
    s = " ".join([s[i] for i in range(k)])
    print(s)
truncateSentence("Hello how are you Contestant", 3)



# class Solution(object):
#     def truncateSentence(self, s, k):
#         """
#         :type s: str
#         :type k: int
#         :rtype: str
#         """
#         s = s.split(" ")
#         s = " ".join([s[i] for i in range(k)])
#         return s