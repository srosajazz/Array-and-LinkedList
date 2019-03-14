// 10-->5-->16 ->null

class Node {
    construction(value) {
      this.value = value;
      this.next = null;
    }
  }
  class LinkedList{
    constructor(value){
      this.head = {
        value: value,
        next: null,
      }
      this.tail = this.head;
      this.length = 1;
    }
  
    //append()
    append(value){
      //instantiated  - ES6
      const newNode = new Node(value);
      //1.create the node
      // const newNode = {
      //   value: value,
      //   next: null,
      // };
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }//O(1)
    //prepend() Add (1)-->10-->5-->16 ->null
    prepend(value){
      //1.create the node
      const newNode = {
        value: value,
        next: null,
      };
      //create a pointer
      newNode.next = this.head;
      //updated the reference
      this.head = newNode;
      this.length++;
      return this;
    }
  } //O(1)
  
  //out put Undefined
  const myLinkedList = new LinkedList(10);
  //command
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  
  //log out all data and length from the LL 
  //console.log(myLinkedList);