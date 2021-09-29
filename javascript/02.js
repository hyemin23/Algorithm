class FamilyTree {
  constructor() {
    this.family = {
      name: "A",
      child: {
        name: "B",
        child: {
          name: "C",
          child: {
            name: "D",
          },
        },
      },
    };
  }
  *[Symbol.iterator]() {
    let node = this.family;
    while (node) {
      yield node.name;
      node = node.child;
      //   console.log(node);
    }
  }
}

const family = new FamilyTree();
console.log([...family]);
