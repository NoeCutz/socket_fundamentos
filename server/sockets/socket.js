
function inicializar(io){
    io.on('connection',(client) => {
        console.log('Usuario conectado')
    
        client.emit('enviarMensaje',{usuario : 'Administrador', mensaje : 'Bienvenido'});
    
        client.on('disconnect',() =>{
            console.log('Usuario desconectado');
        })
        
        
        client.on('enviarMensaje',(data, callback) => {

            console.log(data);

            client.broadcast.emit('enviarMensaje', data)
           
           /* console.log(mensaje);
            if(mensaje.usuario){
                callback('Todo salio bien')
            }else{
                callback('Todo salio mal')
            }*/
           
        })
    })
}

module.exports = {
    inicializar
}
