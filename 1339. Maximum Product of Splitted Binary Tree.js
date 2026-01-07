function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function (root) {
  let Totalsum = 0;
  const MOD = BigInt(10 ** 9 + 1);
  for (i = 0; i < root.length; i++) {
    Totalsum += root[i];
  }
  return MOD;
};
root = [1, 2, 3, 4, 5, 6];
root2 = [1, null, 2, 3, 4, null, null, 5, 6];
console.log(maxProduct(root));
console.log(maxProduct(root2));
