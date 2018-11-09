class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function kthToLastNode(pos, node) {
    let count = 1
    let curr = node
    while (curr.next) {
        curr = curr.next
        count++
    }
    const top = count - pos
    let res = node
    for (let i = 0; i<top;i++){
        res = res.next        
    }
    console.log(res.value)

}

kthToLastNode(2, a);


