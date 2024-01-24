# Definition for singly-linked list.
class ListNode():
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution():
    def getList(self, lNode, revList):
        if lNode == None:
            return
        revList.append(lNode.val)
        self.getList(lNode.next, revList)
    def addTwoNumbers(self, l1, l2):
        revL1 = []
        revL2 = []
        self.getList(l1, revL1)
        self.getList(l2, revL2)
        revL1.reverse()
        revL2.reverse()
        data1 = ''.join(str(x) for x in revL1)
        data2 = ''.join(str(x) for x in revL2)
        data3 = str(int(data1) + int(data2))[::-1]
        data = None
        for x in data3[::-1]:
            l = ListNode(x, data)
            data = l
        return data
s = Solution()
s.addTwoNumbers(ListNode(0), ListNode(3))