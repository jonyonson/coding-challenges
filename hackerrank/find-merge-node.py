# Complete the findMergeNode function below.

#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next


def findMergeNode(head1, head2):
    # s = set()
    # current = head1.next
    # while current:
    #     s.add(current.data)
    #     current = current.next

    # current = head2.next
    # while current:
    #     if current.data in s:
    #         return current.data
    #     current = current.next

    head1_current = head1
    head2_current = head2

    while head1_current != head2_current:
        if not head1_current.next:
            head1_current = head2
        else:
            head1_current = head1_current.next

        if not head2_current.next:
            head2_current = head1
        else:
            head2_current = head2_current.next

    return head1_current.data
