function singleNonDuplicate(nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums[right] !== nums[right - 1]) return nums[right];

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (
      (mid % 2 === 1 && nums[mid - 1] === nums[mid]) ||
      (mid % 2 === 0 && nums[mid] === nums[mid + 1])
    ) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}
