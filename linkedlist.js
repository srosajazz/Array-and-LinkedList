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
      //instantiated 
      //const newNode = new Node(value);
      //1.create the node
      const newNode = {
        value: value,
        next: null,
      };
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  
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
  
  //printList()
  printList(){
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  
  //insert() (1)-->10-->99-->5-->16 ->null
  insert(index, value){ 
  //check params
      if (index >= this.length){
        return this.append(value);
      }
      const newNode = {
        value: value,
        next: null,
      };
      const leaderPointer = this.traverseToIndex(index-1)
      const holdingPointer = leaderPointer.next;
      leaderPointer.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //check params
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    //delete()
    remove(index){
      //check params
      const leaderPointer = this.traverseToIndex(index-1);
      const unwantedNode = leaderPointer.next;
      leaderPointer.next = unwantedNode.next;
      this.length--;
      return this.printList();
      }
    }
  //out put Undefined
  const myLinkedList = new LinkedList(10);
  //command
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert(1, 99);
  myLinkedList.insert(20, 88);
  myLinkedList.insert(21, 67);
  myLinkedList.printList();
  myLinkedList.remove(3);
  myLinkedList.remove(1);
  
  
  //log out all data and length from the LL 
  //console.log(myLinkedList);