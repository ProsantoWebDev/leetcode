/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let currNode = dummy;
  while (list1 != null && list2 !== null) {
    if (list1.val < list2.val) {
      currNode.next = list1;
      list1 = list1.next;
    } else {
      currNode.next = list2;
      list2 = list2.next;
    }
    currNode = currNode.next;
  }
  if (list1 != null) {
    currNode.next = list1;
  } else {
    currNode.next = list2;
  }
  return dummy.next;
};
(list1 = [1, 2, 4]), (list2 = [1, 3, 4]);
console.log(mergeTwoLists(list1, list2));
