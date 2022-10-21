const fs = require('fs');
const stream = require('stream');
const util = require('util');
let data = '';

let readableStream = fs.createWriteStream(__dirname + '/stream.txt');

readableStream.setDefaultEncoding('utf-8');

// readableStream.on('data', function (chunk) {
//     data += chunk;
// });

// readableStream.on('end ', function () {
//     console.log(data)
// });

// process.stdout.write('hola');
// process.stdout.write('hola');
// process.stdout.write('hola');
// process.stdout.write('hola');

const Transform = stream.Transform;
function Mayus() {
    Transform.call(this)
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cd) {
    chunkMayus = chunk.toString().toUpperCAse();
    this.push(chunkMayus);
    cd();
}

let mayus = new Mayus();

readableStream
.pipe(mayus)
.pipe(process.stdout);