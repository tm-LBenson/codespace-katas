function wordCount(){
    let count = 0; // this is state, it will remember it value between each function call
    function counter(doc){
        count += doc.split(" ").length;

        return count; 
    }
    return counter;
}

const counter = wordCount();

console.log(counter("Hello my name is Ben"));
console.log(counter("beep boop"));
