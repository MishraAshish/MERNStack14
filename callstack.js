//CallStack : LIFO ds that helps creating a thread to execute and get output

function foo() {
    //console.log("foo called")
    throw new Error("Foo is not a good function"); 
}

function bar() {
    //console.log("in bar function");
    foo();
}

function baz() {
    //console.log("in baz function");
    bar();   
}

baz();

//breaking the stack

function BreakStack(params) {
    BreakStack()
}
BreakStack()