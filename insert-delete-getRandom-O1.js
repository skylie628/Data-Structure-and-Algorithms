/*Implement the RandomizedSet class:

    RandomizedSet() Initializes the RandomizedSet object.
    bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
    bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
    int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
*/
var RandomizedSet = function () {
  this.set = [];
  this.valueIndexMap = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.valueIndexMap.has(val)) {
    return false;
  }
  this.set.push(val);
  this.valueIndexMap.set(val, this.set.length - 1);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.valueIndexMap.has(val)) {
    return false;
  }
  const indexToRemove = this.valueIndexMap.get(val);
  this.valueIndexMap.set(this.set[this.set.length - 1], indexToRemove);
  this.valueIndexMap.delete(val);
  this.set[indexToRemove] = this.set[this.set.length - 1];
  this.set.pop();
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.set[Math.floor(this.set.length * Math.random())];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
