// We create a class for each node within the stack
class Node {
    // Each node has two properties, its value and a pointer that indicates the node that follows
    constructor(value){
        this.value = value
        this.next = null
    }
}

// We create a class for the stack
class Stack {
    // The stack has three properties, the first node, the last node and the stack size
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    // The push method receives a value and adds it to the "top" of the stack
    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
    // The pop method eliminates the element at the "top" of the stack and returns its value
    pop(){
        if(!this.first) return null
        var temp = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
    print() {
        if (this.size==0) {
          console.log("list is empty");
        } else {
          let list = "";
          let curr = this.first;
          while (curr) {
            list+=`${curr.data}->`
            curr=curr.next;
          }
          console.log(list);
        }
      }
}

const stck = new Stack

stck.push(10)
stck.push(20)
stck.push(30)
     
console.log(stck.last) // Node { value: 'value1', next: null }
// console.log(stck.size) // 3

stck.push(40)
console.log(stck.pop()) // value4



