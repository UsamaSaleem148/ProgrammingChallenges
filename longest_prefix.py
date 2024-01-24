def longestCommonPrefix(strs):
        if len(strs) == 0:
                return ""
        strs = sorted(strs, key=len)
        data = []
        subStrs = [strs[0][i:j] for i in range(len(strs[0])) for j in range(i + 1, len(strs[0]) + 1)]
        for x in subStrs:
                for k in strs[1:]:
                        if x not in k:
                                data.append(x)
        myData = list(set(subStrs)^set(data))
        if len(myData) == 0:
                return ""
        return max(sorted(myData), key=len)

longestCommonPrefix(["cir","car"])