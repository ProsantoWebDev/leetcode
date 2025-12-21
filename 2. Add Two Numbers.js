// Definition for singly-linked list
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Function to add two numbers represented by linked lists
function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummyHead.next;
}

// Helper: build a linked list from array
function buildList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper: convert a linked list to an array in normal number order
function linkedListToArrayInOrder(head) {
    let stack = [];
    while (head) {
        stack.push(head.val);
        head = head.next;
    }
    return stack.reverse(); // reverse to get actual number order
}

// Helper: print a linked list (visual/debug)
function printList(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(" -> "));
}

// 🔁 Test Case
let l1 = buildList([2, 4, 3]); // Represents 342
let l2 = buildList([5, 6, 4]); // Represents 465

let result = addTwoNumbers(l1, l2); // Should represent 807: 7 -> 0 -> 8
printList(result); // Output: 7 -> 0 -> 8

// Convert result linked list to normal array
let normalOrderArray = linkedListToArrayInOrder(result);
console.log("Result in array (normal order):", normalOrderArray); // Output: [8, 0, 7]
