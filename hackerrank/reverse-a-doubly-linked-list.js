/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function reverse(head) {
  if (head === null) return head;

  let current_node = head;
  let previous;

  while (current_node !== null) {
    let temp = current_node.next;
    current_node.next = previous;
    previous = current_node;
    current_node = temp;
  }

  return previous;
}
