from collections import deque

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def levelOrder(self, root):
        if root is None:
            return []

        result = []

        q = deque([root])
        result.append([root.val])

        while q:
            level = []
            for _ in range(len(q)):
                node = q.popleft()
                if node.left != None:
                    q.append(node.left)
                    level.append(node.left.val)
                if node.right != None:
                    q.append(node.right)
                    level.append(node.right.val)
            if level:
                result.append(level)

        return result
