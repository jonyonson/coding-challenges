#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None


def hasPathWithGivenSum(t, s):

    # return true if we run out of tree and s = 0
    if t is None:
        return s == 0

    else:
        answer = False

        # otherwise check both subtrees
        sub_sum = s - t.value

        # if we reach a leaf node and sum becomes 0, then
        # return True
        if sub_sum == 0 and t.left == None and t.right == None:
            return True

        if t.left is not None:
            answer = answer or hasPathWithGivenSum(t.left, sub_sum)
        if t.right is not None:
            answer = answer or hasPathWithGivenSum(t.right, sub_sum)

        return answer
