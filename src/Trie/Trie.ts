import TrieNode from './TrieNode/TrieNode';
class Trie extends TrieNode {
  public root: TrieNode;

  constructor() {
    super();
    this.root = new TrieNode('');
  }

  public addWord(strg: string) {
    this.addWordHelper(this.root, strg);
  }

  public predictWord(strg: string) {
    const getRemainingTree = (str: string, tree: TrieNode) => {
      let node;

      while (str) {
        node = tree.children.get(str[0]);
        str = str.slice(1);
      }
      return node;
    };

    const allWords: string[] = [];

    const remainingTree = getRemainingTree(strg, this.root);
    if (remainingTree) {
      this.allWordsHelper(strg, remainingTree, allWords);
    }
    return allWords;
  }

  public isWord(word: string, node = this.root): boolean {
    const currNode = node.children.get(word[0]);

    if (currNode) {
      word = word.slice(1);
      if (word.length === 0 && currNode.isEnd()) {
        return true;
      } else {
        return this.isWord(word, currNode);
      }
    } else {
      return false;
    }
  }

  private addWordHelper = (node: TrieNode, str: string) => {
    if (!node.children.has(str[0])) {
      node.children.set(str[0], new TrieNode(str[0]));
      while (str.length === 1) {
        const n = node.children.get(str[0]);

        return n && n.setEnd();
      }
    }

    const tnode = node.children.get(str[0]);
    if (tnode !== undefined) {
      this.addWordHelper(tnode, str.slice(1));
    } else {
      return;
    }
  };

  private allWordsHelper = (
    stringSoFar: string,
    tree: TrieNode,
    allWords: string[]
  ) => {
    for (const [k] of tree.children) {
      const child = tree.children.get(k);

      const newString = child && stringSoFar + child.value;

      if (child && newString && child.isEnd()) {
        allWords.push(newString);
      }
      this.allWordsHelper(newString!, child!, allWords);
    }
  };
}

export default Trie;
