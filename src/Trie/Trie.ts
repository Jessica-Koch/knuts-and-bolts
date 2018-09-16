import TrieNode from './TrieNode/TrieNode';
class Trie extends TrieNode {
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
      // if (str.length > 1) {
        const tnode = node.children.get(str[0]);
        if (tnode !== undefined ) {
          addWordHelper(tnode, str.slice(1))
        }else {
          console.log('in other else');
        };

      // }
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

    const allWordsHelper = (stringSoFar: string, tree: TrieNode) => {
      for (const [k] of tree.children) {
        const child = tree.children.get(k);

        const newString = child && stringSoFar + child.value;

        if (child && newString && child.isEnd()) {
          allWords.push(newString);
        }
        allWordsHelper(newString!, child!);
      }
    };

    const remainingTree = getRemainingTree(strg, this);
    if (remainingTree) {
      allWordsHelper(strg, remainingTree);
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

  // public isWord = (word: string) => {
  //   let node = this.root;
  //   while (word.length > 1) {
  //     console.log(word.length);
  //     if (!node.keys.has(word[0])) {
  //       return false;
  //     } else {
  //       node = node.keys.get(word[0])!;
  //       word = word.substr(1);
  //     }
  //     const n = node.keys.entries();
  //     console.log('inside while loop', n.next(), n.next(), n.next(), n.next());
  //   }
  //   console.log('outside while loop', node.keys.has(word));
  //   return node.keys.get(word)!.isEnd();
  };

  // public print = () => {};

  // public delete = () => {};
// }

export default Trie;
