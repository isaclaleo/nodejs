function hi(nombre, mycall) {
    setTimeout(function () {
        console.log('hii ' + nombre);
        mycall();
    }, 3000);
}

function spaek(callbacSpe) {
    setTimeout(function () {
        console.log('BLAASLALSAL');
        callbacSpe
    }, 3500)
}



function adios(nombre, othercall) {
    setTimeout(function () {
        console.log('adios..', nombre);
        othercall();
    }, 4000);
}

function conver(nombre, times, callback) {
    if (times >= 0) {
        spaek(function() {
            conver(nombre, --times, callback);
        })   
    }else{
        adios(nombre, callback);
    }
};


// hhhhhh
console.log('Proceso iniciado..');
    hi('isac', function(nombre) {
        conver(nombre, 3, function () {
            console.log('proceso termnado');
        });
    });
