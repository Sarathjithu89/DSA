//hashtable
class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
    this.size = size;
  }
  //hash function to convert keys
  _hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }
  //insert or update
  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }
  //get key by value
  get(key) {
    const index = this._hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (let pair of bucket) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this._hash(key);
    const bucket = this.table[index];
    if (bucket) {
      this.table[index] = bucket.filter((pair) => pair[0] !== key);
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`${i} `, this.table[i]);
      }
    }
  }
}

const hashtable = new HashTable();
hashtable.set("hello", "sarath");
hashtable.set("age", 25);
hashtable.set("city", "Delhi");

console.log(hashtable.get("age"));
hashtable.display();
hashtable.remove("age");

hashtable.display();
