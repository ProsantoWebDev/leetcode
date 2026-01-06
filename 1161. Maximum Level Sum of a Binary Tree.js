function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var maxLevelSum = function (root) {
  if (!root) return 0;

  const queue = [root];
  let maxSum = -Infinity;
  let maxLevel = 1;
  let currentLevel = 1;
  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelSum = 0;
    for (i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelSum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (levelSum > maxSum) {
      maxSum = levelSum;
      maxLevel = currentLevel;
    }
    currentLevel++;
  }
  return maxLevel;
};

// Now build the tree properly:
// const arr = [1, 7, 0, 7, -8, null, null];
// const rootNode = buildTree(arr);
// console.log(maxLevelSum(rootNode)); // Output: 2

root = [1, 7, 0, 7, -8, null, null];
const newTree = new TreeNode(root);
console.log(maxLevelSum(newTree));
