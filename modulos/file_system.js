const fs = require('fs');


function read(ruta, cd) {
    fs.readFile(ruta, (err, data) => {
        cd(data.toString());
    });
}

function write(ruta, content) {
    fs.writeFile(ruta, content, function (err) {
        if (err) {
            console.log('dont writing', err);
        }else{
            console.log('write done');
        }
    })
}

function erraes(ruta, cd) {
    fs.unlink(ruta, cd);
}


// read(__dirname + '/file_system.txt', console.log)
// write(__dirname + '/file_system.txt', 'Soy un cacahuate...', console.log )
erraes(__dirname + '/file_system', console.log)