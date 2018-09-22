let Queue = require(`./queue`).Queue;
const readline = require(`readline`);

// Use readline to create command line interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`
Queue

Welcome to the Node.js Queue app! 
Version: 1.0.0.

Usage: 
The user will be provided with a prepopulated que. 
User will be prompted for adding and removing que item
from both front and back, 
then presented with final que result.
`);

let elements = 10;
let items = new Queue();

populateQue = () => {
    for (i = 0; i < elements; i++) {
        items.enqueue(i);
    }
}

displayQue = () => {
    console.log(`
    Items in the que:`);
        console.log(`
        ${items._elements}`);
}

addFront = () => {
    let newItem = (items._length - 1) + 1;
    items.addFront(newItem);
    console.log(`
    New Item added to front: ${items.peek()}`);
}

addBack = () => {
    let newItem = (items._length - 1) + 1;
    items.addBack(newItem);
    console.log(`
    New Item added to back: ${items.peek()}`);
}

removeFront = () => {
    let removeItem = items.peek();
    items.removeFront();
    console.log(`
    Item: ${removeItem} removed from front`);
}

removeBack = () => {
    let removeItem = items.peekBack();
    items.removeBack();
    console.log(`
    Item: ${removeItem} removed from back`);
}

promptAction = () => {
    rl.question(`
    Please select from the following options:
    
    [1] Add to front
    [2] Add to back
    [3] Remove front
    [4] Remove back
    [5] Display que
    [x] Close application
    
    Enter your choice: `, (choice) => {
        switch (choice) {
            case `1`:
                addFront();
                promptAction();
                break;
            case `2`:
                addBack();
                promptAction();
                break;
            case `3`:
                removeFront();
                promptAction();
                break;
            case `4`:
                removeBack();
                promptAction();
                break;
            case `5`:
                displayQue();
                promptAction();
                break;
            case `x`:
                rl.close();
                break;
            default:
                console.log(`Please select 1-5 or x to exit`);
                promptAction();
                break;
        }
    });
}

populateQue();
displayQue();
promptAction();