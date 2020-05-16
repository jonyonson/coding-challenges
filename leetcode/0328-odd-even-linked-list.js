/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var oddEvenList = function (head) {
//   let len = 0;
//   let current_node = head;
//   let values = [];

//   while (current_node !== null) {
//     len++;
//     values.push(current_node.val);
//     current_node = current_node.next;
//   }

//   let num_odds = Math.ceil(len / 2);
//   current_node = head;
//   let i = 1,
//     j = 0,
//     k = l;

//   while (current_node !== null) {
//     if (i <= num_odds) {
//       current_node.val = values[j];
//       j += 2;
//     } else {
//       current_node.val = values[k];
//       k += 2;
//     }
//     current_node = current_node.next;
//     i++;
//   }

//   return head;
// };

var oddEvenList = function (head) {
  if (head === null) return head;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;

  return head;
};
