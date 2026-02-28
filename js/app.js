setTimeout(() => {
    console.log("run after 2s");
}, 2000);

console.log("one");
setTimeout(() => {
    console.log("one.one");
}, 2000);

console.log("two");
setTimeout(() => {
    console.log("two.two");
}, 1000);