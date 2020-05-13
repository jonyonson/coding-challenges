function mergeLists(head1, head2) {
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  // let head3 = new SinglyLinkedListNode()
  let head3;

  if (head1.data < head2.data) {
    head3 = head1;
    head1 = head1.next;
  } else {
    head3 = head2;
    head2 = head2.next;
  }

  let current_node = head3;

  while (head1 !== null && head2 !== null) {
    if (head1.data < head2.data) {
      current_node.next = head1;
      head1 = head1.next;
    } else {
      current_node.next = head2;
      head2 = head2.next;
    }

    current_node = current_node.next;
  }

  if (head1 === null) {
    current_node.next = head2;
  } else {
    current_node.next = head1;
  }

  return head3;
}

// https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem
