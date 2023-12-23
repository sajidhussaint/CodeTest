class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  prepend(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }


  append(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }



  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let list = "";
      let curr = this.head;
      while (curr) {
        list+=`${curr.data}->`
        curr=curr.next;
      }
      console.log(list);
    }
  }
}




const li = new Linkedlist();


li.prepend(50)
li.prepend(70)
li.prepend(20)
li.print()
