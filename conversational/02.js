/**
 * Question 1
 */
class UserProfile {
  constructor(age, height) {
    this.age = age;
    this.height = height;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to ${this.age}`);
  }
}

const user = new UserProfile(25, 175);
user.updateAge(26);
user = new UserProfile(27, 175); 

console.log(`Age: ${user.age}, Height: ${user.height}`); //Prints ...
