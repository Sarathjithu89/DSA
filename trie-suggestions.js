class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }
  searchPrefix(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return null;
      node = node.children[char];
    }
    return node;
  }
  suggest(prefix) {
    const node = this.searchPrefix(prefix);
    if (!node) return [];
    const result = [];
    const dfs = (current, path) => {
      if (current.isEnd) result.push(path);
      for (let char in current.children) {
        dfs(current.children[char], path + char);
      }
    };
    dfs(node, prefix);
    return result;
  }
}

const trie = new Trie();
["apple", "app", "application", "apply", "banana"].forEach((w) =>
  trie.insert(w)
);

console.log(trie.searchPrefix("a"));
