// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

/*
 Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */


import java.util.Arrays;

public class TwoSum {
    public static void main(String[] args){
        int[] nums = {2,2,4,4,6,6};
        int target = 12;
        System.out.println(Arrays.toString(twoSum(nums,target))); //To represent the array output.
    }
    
 public static int[] twoSum(int[] nums, int target) {
       for(int i=0; i<nums.length; i++){
           int diff = target - nums[i]; // Take out the difference of target and the element you're on.
           for(int j=i+1; j<nums.length; j++){
            // If that number is equal to the difference, you got the two sums.
               if(nums[j] == diff){
                    // Return the array.
                   return new int[]{i,j};
               }
           }
       }
       //If not found return null.
       return null;
    }
}