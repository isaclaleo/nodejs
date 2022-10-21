function asyncro(callback) {
    setTimeout( function () {
        try {
            let a = 2 + z;
            callback(null, a) 
        } catch (e) {
            callback(e)
        }
    }, 2000)
}
// try {
    
// } catch (error) {
    
// }

asyncro(function (err, data ) {
    if (err) {
        console.error('Tenemos error XD  ');
        console.error(err);
        // throw err; no funciona
        return false;
    }
    console.log('Good')
})