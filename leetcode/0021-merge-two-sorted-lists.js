/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let l3;

  if (l1.val < l2.val) {
    l3 = l1;
    l1 = l1.next;
  } else {
    l3 = l2;
    l2 = l2.next;
  }

  let current_node = l3;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current_node.next = l1;
      l1 = l1.next;
    } else {
      current_node.next = l2;
      l2 = l2.next;
    }

    current_node = current_node.next;
  }

  if (l1 === null) {
    current_node.next = l2;
  } else {
    current_node.next = l1;
  }

  return l3;
};
