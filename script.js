// function threeSum(arr, target) {
//     // write your code here
//         let closestSum = Infinity;
//         // let sum ; 
        
//         for(let i=0 ; i<arr.length-2 ; i++)
//             {
//                 for(let j=i+1 ; j<arr.length-1; j++)
//                     {
//                         for(let k=j+1 ; k<arr.length ; k++)
//                             {
//                                 let sum = arr[i] + arr[j] +arr[k];
//                                 // console.log(arr[i] , arr[j] ,arr[k])
//                                 let diff = Math.abs(target-sum)
//                                 // console.log("diff" , diff)
                                
//                                 if(diff < closestSum)
//                                 {
//                                     closestSum = diff;
//                                 }
//                             }
//                     }
//             }
//         return closestSum;
      
//     }


function threeSum(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array

    let closestSum = nums[0] + nums[1] + nums[2]; // Initialize closest sum
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum; // Update closest sum if needed
            }
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return closestSum; // Return if exact match found
            }
        }
    }
    return closestSum; // Return closest sum
}

module.exports = threeSum;
