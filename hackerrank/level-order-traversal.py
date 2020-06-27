

"""
Node is defined as
self.left (the left child of the node)
self.right (the right child of the node)
self.info (the value of the node)
"""


def levelOrder(root):
    queue = [root]

    while queue:
        node = queue.pop()
        print(str(node.info) + " ", end="")
        if node.left:
            queue.insert(0, node.left)
        if node.right:
            queue.insert(0, node.right)
