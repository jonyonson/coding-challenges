/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
  while (head !== null) {
    console.log(head.data);
    head = head.next;
  }
}
