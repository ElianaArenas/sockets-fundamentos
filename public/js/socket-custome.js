var socket = io();
        
//Escuchar informacion
socket.on('connect',()=>{
    console.log('Conectado al servidor');
});

socket.on('disconnect',()=>{
    console.log('Se perdio conexion al servidor');
});

//Enviar informacion
socket.emit('enviarMensaje',{
    usuario: 'Eliana',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log('Respuest server',resp);
});

//Escuchar informacion
socket.on('enviarMensaje',(mensaje)=>{
    console.log('Servidor:',mensaje);
});
