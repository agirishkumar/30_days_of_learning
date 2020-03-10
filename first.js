const name = 'Girish';
var age = 21;
let hasHobbies = true;
 age = 22;
 hasHobbies = false;
function summariseUser(userName, userAge, userhasHobbies){
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge + 
        ' and the user has hobbies: ' +
        userhasHobbies
    );
}

console.log(summariseUser(name , age , hasHobbies));