import TrieNode from './TrieNode/TrieNode';
class Trie extends TrieNode {
  // public print = () => {};

  // public delete = () => {};
  // }

  constructor() {
    super(undefined);
  }

  public addWord(strg: string) {
    const addWordHelper = (node: TrieNode, str: string) => {
      if (!node.children.has(str[0])) {
        node.children.set(str[0], new TrieNode(str[0]));
        while (str.length === 1) {
          const n = node.children.get(str[0]);

          return n && n.setEnd();
        }
      }

      const tnode = node.children.get(str[0]);
      if (tnode !== undefined) {
        addWordHelper(tnode, str.slice(1));
      } else {
        return;
      }
    };
    addWordHelper(this, strg);
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

    const remainingTree = getRemainingTree(strg, this);
    if (remainingTree) {
      this.allWordsHelper(strg, remainingTree, allWords);
    }
    return allWords;
  }
  // private addWordHelper = (node: TrieNode, str: string) => {
  //   if (!node.children.has(str[0])) {
  //     node.children.set(str[0], new TrieNode(str[0]));

  //     const cnodes = node.children.get(str[0]);
  //     if (str.length === 1 && cnodes) {
  //       cnodes.setEnd();
  //     }
  //     if (str.length > 0 && cnodes) {
  //       this.addWordHelper(cnodes, str.substr(1));
  //     }
  //   }
  //   this.addWordHelper(this, str);
  // };
  public isWord = (word: string) => {
    while (word.length > 1) {
      let node = this.children.get(word[0]);

      if (node === undefined) {
        return false;
      } else {
        word = word.substr(1);
        node = node.children.get(word[0]);
      }

      return true;
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
