function leerNombre(){
let campoNombre= document.querySelector(".nombre");
let nombre= campoNombre.value;

let campoApellido= document.querySelector(".apellido");
let apellido= campoApellido.value;

let campoTelefono= document.querySelector(".telefono");
let telefono= campoTelefono.value;

let campoEmail= document.querySelector(".email");
let email= campoEmail.value;

if (nombre === ""){
	console.log('nombre vacío');
}

alert ('Opps!')

if (apellido === ""){
	console.log('apellido vacío');
}

alert ('Opps!')

if (telefono === ""){
	console.log('telefono vacío');
}

alert ('Opps!')

if (email === "") {
	console.log('email vacío');
}

alert ('Opps!')
}	
