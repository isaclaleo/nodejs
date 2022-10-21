async function hi(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Hii.. ' + nombre);
            resolve(nombre)
        }, 3000);
    })
}

async function speak(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout( function() {
            console.log('Bla-- bla');
            resolve(nombre);
        }, 3500);
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout( function()  {
            console.log('adios', nombre);
            resolve();
        },4000);
    })
}

async function main() {
    const nombre =  await hi('isac');
    await speak();
    await speak();
    await speak();
    await adios(nombre);
}
console.log('Proceso inicada..');
main();
console.log('Proceso terminado..');