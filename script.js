
//Function constructor
/*
var john = {
    name: 'John',
    yearOfBirthday: 1990,
    job: 'teacher'
};

var Person = function(name,yearOfBirthday,job){
    this.name = name;
    this.yearOfBirthday = yearOfBirthday;
    this.job = job;
}


var john = new Person('John',1990,'teacher');
var mark = new Person('Mark',1995,'doctor');

Person.prototype.calculateAge = function(){
    console.log(2020-this.yearOfBirthday);
} 

Person.prototype.lastName = 'Smith';

console.log("hey");

john.calculateAge();

console.log(john.name + ' ' + john.lastName)
console.log(mark.name + ' ' + mark.lastName)

*/

//Class Functions: Functions Returning functions

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ' can you please explain what ux design is?');
        }
    }
    else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach ' + name + '?');
        }
    }
    else{
        return function(name){
            console.log('Hello '+ name +' what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('Jane');



