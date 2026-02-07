let arr = ['o', 'p', 'o', 'i', 'p'];

let count = {};

for(let i = 0; i < arr.length; i++) {
    if(count[arr[i]]) {
        count[arr[i]]++;
    } else {
        count[arr[i]] = 1;
    }

    console.log(count);
}