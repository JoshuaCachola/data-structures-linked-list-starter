// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return undefined;
        let currentNode = this.head;
        const tail = this.tail;
        while (currentNode) {
            if (currentNode.next === this.tail) {
                currentNode.next = null;
                this.tail = currentNode;
            }
            currentNode = currentNode.next
            this.length--;
        }
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return tail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === target) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let currentNode = this.head;
        let counter = 0;
        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let currentNode = this.get(index);
        if (currentNode) {
            currentNode.value = val;
            return true;
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) {
            this.addToHead(val);
            return true;
        
        } else if (index === this.length) {
            this.addToTail(val);
            return true;
        } 
        const newNode = new Node(val);
        const prevNode = this.get(index - 1);
        if (prevNode) {
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
            return true;
        }
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) {
            return this.removeHead(val);  

        } else if (index === this.length) {
            return this.removeTail(val);
        } 
        const prevNode = this.get(index - 1);
        const removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
