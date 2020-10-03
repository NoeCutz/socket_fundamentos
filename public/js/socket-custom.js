var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor')
});

socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});

socket.emit('enviarMensaje',{
    usuario : 'Noe',
    mensaje : 'Hola mundo'
}, function(res){
    console.log(res);
});

socket.on('enviarMensaje',function(mensaje){
    console.log('Servidor',mensaje)
})