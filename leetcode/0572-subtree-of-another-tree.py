# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSubtree(self, s: TreeNode, t: TreeNode) -> bool:
        tree1 = self.preorder(s, True)
        tree2 = self.preorder(t, True)

        try:
            idx = tree1.index(tree2)
        except ValueError:
            idx = -1

        return idx >= 0

    def preorder(self, t, left):
        if t == None:
            if left:
                return "lnull"
            else:
                return "rnull"
        return f"#{str(t.val)} {self.preorder(t.left, True) + self.preorder(t.right, False)}"
