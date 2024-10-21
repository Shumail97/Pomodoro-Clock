
// <!--Excercise 1-->

class Person {
  //A constructor initializes these properties
  constructor(name, age) {
    this.name = John;
    this.age = 34;
  }
  //The introduce method is implemented to return a string.
  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("John", 25);
console.log(person1.introduce());

// <!--Excercise-2-->

// Create a new Person object
const person1 = new Person("John", 25);

// Define the describePerson function
function describePerson(callback) {
    // Call the callback function with person1 as the this context
    callback.call(person1);
}

// Use the describePerson function to introduce person1
describePerson(function() {
    console.log(this.introduce());
});


// <--Excercise 3-->

function wait(millisec) {
    //return a new value that resolvs after the given number of milliseconds.
    return new Promise((resolve, reject) => {
        //Use setTimeout to delay the Promise.
        setTimeout(() => {
            //resolve Promise with the num of millisecs that passed.
            resolve(Waited for ${millisec} milliseconds.);
            }, 2000);
            });
}
wait().then((result) => {
    console.log(result);
  });


// Event listener for the introduce button
document.getElementById('introduceButton').addEventListener('click', () => {
    describePerson(function() {
        document.getElementById('output').innerText = this.introduce();
    });
});

// Event listener for the wait button
document.getElementById('waitButton').addEventListener('click', async () => {
    const message = await wait(2000);
    document.getElementById('output').innerText = message;
});


