const person = {
    name: 'Girish',
    age: '21',
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({ name }) => {
    console.log(name);
}
printName(person);
console.log('-----------------------');
const { name, age} = person; // destructuring object
console.log(name,age);



 person.greet();

const hobbies = ['Sports','Cooking']; //  array deconstruction
const [h1,h2]=hobbies;
console.log(h1,h2);
// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // };

// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // console.log(hobbies);
// const copiedArray = [hobbies];
// const copiedArray1 = [...hobbies]; // spread operator
// console.log(copiedArray1);
// console.log(copiedArray);

// const toArray = (...args) => { // rest operator
//     return args;
// }

// console.log(toArray(1,2,3,4));