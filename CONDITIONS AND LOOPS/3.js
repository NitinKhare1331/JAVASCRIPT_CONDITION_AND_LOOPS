/*Loops are used to perform repeated tasks based on a condition. Conditions typically return true or false . A loop will continue running until the defined condition returns false .

There are mainly 4 loops:-

1)For loop:The for loop is the most common type of loop. It repeats a set of statements a specific number of times. The syntax for a for loop is:*/

for (var i = 0; i < 10; i++) {
  // code block to be executed
}

/*2)While loop: The while loop is similar to the for loop, but it will continue to iterate as long as a certain condition is true. The syntax for a while loop is:*/

while (condition) {
  // code block to be executed
}

/*3)Dowhile loop: The do...while loop is similar to the while loop, but it will always iterate at least once, even if the condition is false. The syntax for a do...while loop is:*/

do {
  // code block to be executed
} while (condition);

/*For...in loop:The for...in loop is used to iterate over the properties of an object. The syntax for a for...in loop is:*/

for (var property in object) {
  // code block to be executed
}