/*
705. Design HashSet
Solved
Easy
Topics
premium lock icon
Companies
Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 

Example 1:

Input
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
Output
[null, null, null, true, false, null, true, null, false]

Explanation
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
 

Constraints:

0 <= key <= 106
At most 104 calls will be made to add, remove, and contains.
*/
class MyHashSet {
  constructor() {
    // key is in the range [1, 1000000]
    // 31251 * 32 = 1000032
    this.set = new Array(31251).fill(0);
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    this.set[Math.floor(key / 32)] |= this.getMask(key);
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    if (this.contains(key)) {
      this.set[Math.floor(key / 32)] ^= this.getMask(key);
    }
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    return (this.set[Math.floor(key / 32)] & this.getMask(key)) !== 0;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  getMask(key) {
    return 1 << key % 32;
  }
}
