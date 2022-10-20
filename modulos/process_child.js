// const { exec } = require('child ');

const { spawn } = require("child_process");

// exec('ls -la', (err, stad, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stad)
// })

let process = spawn('ls', ['-la']);

console.log(process.pid);
console.log(process.connected);

process.stad.on('data', function (dato) {
    console.log('¿ estas muerto ?');
    console.log(process.killed);
    console.log(dato.toString());
});

process.on('exit', function () {
    console.log('El proceso termino');
    console.log(process.killed);
});