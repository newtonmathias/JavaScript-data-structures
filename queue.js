//A queue obeys the principle of first in first out
//An item placed in a queue can only be removed after 
//all items added before it are removed
function createQueue() {
    const queue = [] 

    return {
        //adds an item 
        enqueue(item) {
            queue.unshift(item)
        },
        //removes an item
        dequeue(item) {
            queue.pop(item)
        },
        //shows what's next to be removed
        peek(item) {
            return queue[queue.length - 1]
        },
        //shows length
        get length() {
            return queue.length
        },
        //returns true if empty
        isEmpty() {
            return queue.length === 0
        }
    } 
}



