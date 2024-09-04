const userObj = require('./user.js');
const userObj2 = require('./user-2-0.js');
const { user: user1, sayHello: sayHello1 } = require('./user-2-1.js');
const { user: user2, sayHello: sayHello2 } = require('./user-2-2.js');

console.log('Node.js basic', __dirname, __filename, userObj, userObj2);


userObj2.sayHello()

console.log(userObj2.user)

console.log(user1)
sayHello1()

console.log(user1)
sayHello2()