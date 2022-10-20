// const process = require('process');
process.on('exit', () => {
    console.log('fin proceso');
});

process.on('exit', () => {
    console.log('acabo el proceso')
    setTimeout(() => {
        console.log('no se ve');
    },3000);
});

process.on('uncaughtException', ( err, origen) =>{
    console.error('captura el error');
    console.error(err);
});