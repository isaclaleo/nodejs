function other() {
     broke();
}


function broke() {
    return 3 + z;
}

function brokeAsync(cd) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch (erro) {
            console.log('error at brokeAsync')
            cd(erro);
        }
    }, 3000)
}

try {
    // broke();
    // other();
    brokeAsync(function (error) {
        console.log(error.message);
    } );
} catch (err) {
    console.error('se hace un error');
    console.error(err.message);
};