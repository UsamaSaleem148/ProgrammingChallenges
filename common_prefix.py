class Solution():
    def longestCommonPrefix(self, strs):
        if len(strs) == 0:
                return ""
        data = ''
        subStrs = [strs[0][0:i + 1] for i in range(len(strs[0]))]
        found = True
        for i, x in enumerate(subStrs):
            for k in strs[1:]:
                if not k.startswith(x):
                    found = False
                    break
            if found == False:
                if i == 0:
                    data = ""
                    break
                else:
                    data = subStrs[i - 1]
                    break
            elif i == len(subStrs) - 1:
                data = subStrs[i]
        return data
s = Solution()
print(s.longestCommonPrefix(["c","acc","ccc"]))

# More Optimal

# class Solution(object):

#     def longestCommonPrefix(self, strs):
#         longest_prefix = min(strs, key = len)
#         for str in strs:
#             while (longest_prefix):
#                 if (str.startswith(longest_prefix)):
#                     break
#                 else:
#                     longest_prefix = longest_prefix[:-1]
#         return longest_prefix