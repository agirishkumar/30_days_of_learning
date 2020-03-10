import { callbackify } from "util";

const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    },1500);
}




setTimeout(() => {
    console.log('Timer done!');
    fetchData(text => {
        console.log(text);
    })
},5000)  ;  //async code

console.log('Hello');