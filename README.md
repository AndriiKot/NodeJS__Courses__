# Node.js-lesson-4
Node.js Lesson 4
```node
const http = require('http');

http.createServer((request,response) => {
  if(request.url === '/be-nice'){
     response.write('Now are you? Do you want pancakes?');
  } else {
    response.write('Hello world!');
  }
  response.end();
}).listen(3000);
```
