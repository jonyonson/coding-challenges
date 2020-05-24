/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
function bstFromPreorder(preorder) {
  let index = 0;
  return preOrderTraversal(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

  function preOrderTraversal(lowerBound, upperBound) {
    if (index === preorder.length) return null;

    if (preorder[index] >= lowerBound && preorder[index] < upperBound) {
      const root = new TreeNode(preorder[index++]);
      root.left = preOrderTraversal(lowerBound, root.val);
      root.right = preOrderTraversal(root.val, upperBound);

      return root;
    }

    return null;
  }
}
