// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
  let head = l;
  let stack = [];

  while (l !== null) {
    stack.push(l.value);
    l = l.next;
  }

  while (head !== null) {
    if (stack.pop() !== head.value) {
      return false;
    }

    head = head.next;
  }

  return true;
}
