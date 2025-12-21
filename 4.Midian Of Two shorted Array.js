/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  arra = [...nums1, ...nums2].sort((a, b) => a - b);
  const n = arra.length;
  let median;
  if (n % 2 === 0) {
    mid1 = arra[n / 2 - 1];
    console.log(mid1);
    mid2 = arra[n / 2];
    median = (mid1 + mid2) / 2;
  } else {
    median = arra[Math.floor(n / 2)];
  }
  return median;
};
