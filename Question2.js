
// Question 2: DSA Given an array of integers nums and an integer target, return the indices of the two
// numbers such that they add up to target. You may assume that each input would have exactly one
// solution, and you may not use the same element twice. You can return the answer in any order.
// For example, given:
// const nums = [2, 7, 11, 15];
// const target = 9;
// The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.
// Requirements:
//  Implement the solution in JavaScript.
//  The solution should have a time complexity better than O(n^2).
//  Include proper error handling for edge cases.

function twoSum(nums, target) {
    // Initialize a hash map to store the value and its index
    const map = new Map();

    // Iterate over the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (map.has(complement)) {
            // Return the indices of the complement and the current number
            return [map.get(complement), i];
        }

        // Otherwise, store the current number and its index in the map
        map.set(nums[i], i);
    }

    // If no solution is found, throw an error
    throw new Error("No solution found");
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1] because 2 + 7 = 9
