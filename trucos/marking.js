let suma  = 0;
console.time('bucle');
for (let i = 0; i < 10000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');


let suma2  = 0;
console.time('bucle 2');
for (let j = 0; j < 10000000; j++) {
    suma += 1;
}

console.time(asyncron);
asyncron()
.then(() => {
    console.timeEnd('end')
})

console.timeEnd('bucle 2');

function asyncron() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('termina');
            resolve;
        })
    })
}