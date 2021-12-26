/* 方案一 */
//双指针遍历两个Array
//找到nums2的当前元素，在nums1中的合适位置，进行插入即可，具体步骤如下
// 如果 nums2[p2]<=nums1[p1] ,让nums1[p1]及其之后的元素依次向后移动，再让nums2[p2]放置到nums1[p1]处。

export default function merge(nums1, m, nums2, n) {
  if (m === 0) {
    nums2.map((v, i) => (nums1[i] = v));
    return nums1;
  }

  let p1 = 0;
  let p2 = 0;

  while (p1 < m && p2 < n) {
    if (nums2[p2] <= nums1[p1]) {
      for (let i = nums1.length - 1; i > p1; i--) {
        nums1[i] = nums1[i - 1];
      }
      nums1[p1 + 1] = nums1[p1];
      nums1[p1] = nums2[p2];
      p2++;
      p1++;
      m++;
    } else {
      p1++;
    }
  }

  while (p2 < n) {
    nums1[p1] = nums2[p2];
    p1++;
    p2++;
  }

  return nums1;
}

// export default function merge(nums1, m, nums2, n) {
//   nums1.length = m;
//   nums2.map((v, i) => nums1.push(v));
//   return (nums1 = nums1.sort((a, b) => a - b));
// }
