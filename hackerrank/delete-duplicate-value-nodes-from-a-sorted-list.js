/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {
  if (head === null) return head;

  let new_head = head;

  while (head.next !== null) {
    if (head.data === head.next.data) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }

  return new_head;
}

// https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list
