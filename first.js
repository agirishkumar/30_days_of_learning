const name = 'Girish';
var age = 21;
const hasHobbies = true;

const summariseUser = (userName, userAge, userhasHobbies) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge + 
        ' and the user has hobbies: ' +
        userhasHobbies
    );
};

const add = (a,b) => {
    return (a+b);
};
const addOne = (a) => a+1;

console.log(summariseUser(name , age , hasHobbies));
console.log(add(2,3));
console.log(addOne(5));