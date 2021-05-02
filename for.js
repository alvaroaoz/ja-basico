var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
	console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){ // el for de forma syntaxica siempre ocupa la variable i
	saludarEstudiantes(estudiantes[i])
}

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
	console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){ // estudiante se combierte en el index de estudiantes
	saludarEstudiantes(estudiante);
}
