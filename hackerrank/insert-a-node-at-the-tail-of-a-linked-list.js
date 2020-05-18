/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
  const new_node = { data, next: null };
  if (head === null) return new_node;
  let current_node = head;

  while (current_node !== null) {
    if (current_node.next === null) {
      current_node.next = new_node;
      return head;
    }

    current_node = current_node.next;
  }
}

// https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list
