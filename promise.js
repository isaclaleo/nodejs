function hi(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Hii.. ' + nombre);
            resolve(nombre)
        }, 3000);
    })
}

function speak(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout( function() {
            console.log('Bla-- bla');
            resolve(nombre);
        }, 3500);
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout( function()  {
            console.log('adios', nombre);
            resolve();
        },4000);
    })
}
// hh
console.log('Proceso inicia');
hi('isac')
    .then(speak)
    .then(adios)
    .then((nombre) => {
        console.log('Porceso terminda');
    })
    .catch(error => {
        console.log('hay error');
        console.error(error);
    });