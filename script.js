function threeSum(arr, target) {
    // write your code here
        let closestSum = Infinity;
        // let sum ; 
        
        for(let i=0 ; i<arr.length-2 ; i++)
            {
                for(let j=i+1 ; j<arr.length-1; j++)
                    {
                        for(let k=j+1 ; k<arr.length ; k++)
                            {
                                let sum = arr[i] + arr[j] +arr[k];
                                // console.log(arr[i] , arr[j] ,arr[k])
                                let diff = Math.abs(target-sum)
                                // console.log("diff" , diff)
                                
                                if(diff < closestSum)
                                {
                                    closestSum = diff;
                                }
                            }
                    }
            }
        return closestSum;
      
    }

module.exports = threeSum;
