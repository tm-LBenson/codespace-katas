'use strict';

export default function josephusSurvivor(n, k) {
    class Node {
        constructor(value, head) {
            this.value = value
            this.next = head;
        }
    }


    class LinkedList {
        constructor() {
            this.head = null
            this.length = 0
            this.activeNode = null
        }
        add(value) {
            if (this.head === null) {
                this.head = newNode
                const newNode = new Node(value, this.head)
                this.activeNode = this.head
                this.length++
            } else {
                const newNode = new Node(value, this.head)
                let currentNode = this.head
                while (currentNode.next !== null) {
                    currentNode = currentNode.next
                }
                currentNode.next = newNode
                this.length++
            }
     
        }
        incrementActive(){
            if(this.length > 1){
                this.activeNode = this.activeNode.next
                console.log("Current Active node: ",this.activeNode.value)
            }
            
        }

        wrapList() {

            let currentNode = this.head
            while (this.length > 1) {
                console.log(currentNode)
                currentNode = currentNode.next
            }
            currentNode.next = this.head
         
        }

        removeNode(value) {
            let previousNode = this.head
            if(this.head.value === value){
                console.log("GOT IT ", this.activeNode.value)
                return this.activeNode.value
            }
            let currentNode = this.head.next
            while (this.length > 1) {
                console.log('looping')
                if (currentNode === value) {

                previousNode.next = currentNode.next.next
                currentNode.next = this.head
                    
                }
                previousNode = currentNode;
                currentNode = currentNode.next
                this.activeNode = currentNode
            }
        }
   
    }

    const linkedList = new LinkedList()
   
    for (let i = 0; i < n; i++) {
        linkedList.add(i + 1)
    }
    linkedList.wrapList()
   
    while (linkedList.length > 1) {
 
        for (let i = 0; i < k; i++) {
            linkedList.incrementActive()
            

        }
        linkedList.removeNode(linkedList.activeNode.value)
        
    }
    console.log(linkedList)
}
