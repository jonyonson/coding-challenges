/*
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function deleteNode(head, position) {
  if (head === null) return head;
  if (position === 0) return head.next;

  let i = 0;
  let current = head;

  while (i < position - 1) {
    current = current.next;
    i++;
  }

  current.next = current.next.next;

  return head;
}
