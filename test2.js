function findMissingNum(nums) {
   const n = nums.length;
   const numSet = new Set(nums);
   const result = [];

   for (let i = 1; i <= n; i++) {
      if (!numSet.has(i)) {
         result.push(i);
      }
   }

   return result;
}

// Tes case
const nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findMissingNum(nums1));

const nums2 = [1, 1];
console.log(findMissingNum(nums2));
