const twoSum = (numbers, target, idx1 = 0) =>
  (idx2 => ~idx2 ? [idx1, idx2] : twoSum(numbers, target, ++idx1))
  (numbers.indexOf(target - numbers[idx1], idx1 + 1));

twoSum=(n,t,r)=>[r=n.indexOf(n.filter(u=>n.includes(t-u))[0]),n.lastIndexOf(t-n[r])]

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}



const twoSum = (nums, target) => {
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }
  return null;
} 