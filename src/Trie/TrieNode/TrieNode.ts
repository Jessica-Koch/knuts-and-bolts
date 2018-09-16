class TrieNode {
  public children: Map<string, TrieNode>;
  // public children: object;
  public isEndOfWord: boolean;
  public value: string | undefined;

  constructor(value?: string) {
    this.children = new Map();
    this.isEndOfWord = false;
    this.value = value;
  }

  public isEnd() {
    return this.isEndOfWord === true;
  }

  public setEnd() {
    this.isEndOfWord = true;
  }
}

export default TrieNode;
