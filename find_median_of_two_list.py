class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        newData = []
        if len(nums1) > 0:
            newData += nums1
        if len(nums2) > 0:
            newData += nums2
        newData = sorted(newData)
        items = []
        if len(newData)%2 == 0:
            mid = float(len(newData))/2
            mid = int(mid)
            items = newData[mid-1:mid+1]
        else:
            mid = float(len(newData))/2
            mid = int(mid - .5)
            items = [newData[mid]]
        sum = 0
        for x in items:
            sum += x
        return float(sum)/len(items)
s = Solution()
print(s.findMedianSortedArrays([1,2], [3,4]))