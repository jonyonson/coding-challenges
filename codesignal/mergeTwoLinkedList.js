// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let l3 = null;
  if (l1.value < l2.value) {
    l3 = l1;
    l1 = l1.next;
  } else {
    l3 = l2;
    l2 = l2.next;
  }

  let currentNode = l3;

  while (l1 !== null && l2 !== null) {
    if (l1.value < l2.value) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }

    currentNode = currentNode.next;
  }

  if (l1 == null) {
    currentNode.next = l2;
  } else {
    currentNode.next = l1;
  }

  return l3;
}
