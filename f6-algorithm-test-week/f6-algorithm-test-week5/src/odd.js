/*

    홀수

    7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최솟값을 찾아 배열에 담아 리턴해주세요.

    예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53, 85이므로 그 합은

    77 + 41 + 53 + 85 = 256 이 되고,

    41 < 53 < 77 < 85 이므로 홀수들 중 최솟값은 41이 됩니다.

    따라서 함수 odd에 매개변수 nums로 [12, 77, 38, 41, 53, 92, 85]이 주어진다면,
    홀수들의 합과 최솟값을 배열에 담아 [256, 41] 을 리턴해주세요. 

    단, 홀수가 존재하지 않을 경우 -1을 리턴해주세요. 
*/
function odd(nums) {
  // 여기에서 작업해 주세요
  // nums=[num1, num2, num3, num4, num5, num6, num7]
  if (nums[0] % 2 === 0 && nums[1] % 2 === 0 && nums[2] % 2 === 0 && nums[3] % 2 === 0 && nums[4] % 2 === 0 && nums[5] % 2 === 0 && nums[6] % 2 === 0) return -1;

  const fff = [];
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i])
    if (nums[i] % 2 !== 0) {
      console.log(nums[i]);
      // fff = nums[i]
      fff.push(nums[i]);
    }
  }
  console.log(fff);
  // if (
  //   nums[0]%2===0 ||
  //   nums[1]%2===0 ||
  //   nums[2]%2===0 ||
  //   nums[3]%2===0 ||
  //   nums[4]%2===0 ||
  //   nums[5]%2===0 ||
  //   nums[6]%2===0
  // )
  //   return 111
}

odd([12, 77, 38, 41, 53, 92, 85]);
odd([2, 4, 20, 32, 6, 10, 8]);
module.exports = odd;
