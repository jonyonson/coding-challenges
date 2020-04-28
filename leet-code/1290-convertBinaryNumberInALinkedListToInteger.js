/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let binary = '';

  while (head !== null) {
    binary += head.val.toString();
    head = head.next;
  }

  return parseInt(binary, 2);
};
