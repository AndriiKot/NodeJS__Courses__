const path = require('node:path');

console.log(path);
console.log(__filename);
console.log(path.basename(__filename));

console.log('\n\n');

console.log(__dirname);
console.log(path.dirname(__filename));


console.log('\n\n');

console.log(path.extname(__filename));


console.log('\n\n');
const pathObj = path.parse(__filename);

console.log(path.parse(__filename));
console.log(pathObj.ext);
console.log(pathObj.root);
console.log(pathObj.name);
console.log(pathObj.base);
console.log(pathObj.dir);


console.log('\n\n');
console.log(path.join(__dirname, 'test', 'second.html'));
console.log(path.join(__dirname, 'test', 'folder', 'first.html'));


console.log('\n\n');
console.log(path.resolve(__dirname, './test', 'second.html'));
console.log(path.resolve(__dirname, './test', '/second.html'));
console.log(path.resolve(__dirname, './test', './second.html'));









