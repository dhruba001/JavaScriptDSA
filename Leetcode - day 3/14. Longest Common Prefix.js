/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/

var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";

  // Take the first string as reference
  let prefix = strs[0];

  // Compare with each string in the array
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    // Compare characters until they match
    while (
      j < prefix.length &&
      j < strs[i].length &&
      prefix[j] === strs[i][j]
    ) {
      j++;
    }
    // Update prefix to the matched part
    prefix = prefix.substring(0, j);

    // If prefix becomes empty, no common prefix exists
    if (prefix === "") return "";
  }

  return prefix;
};
