function decodificarMensaje() {
    let mensajeCodificado = document.getElementById("texto").value; // Almacena el mensaje que se va a decodificar 
    let mensajeDecodificado = "";
    let palabraADecodificar = "";
    
    // Recorrer cada carácter del mensaje codificado
    for(let i = 0; i < mensajeCodificado.length; i++) {
        if(mensajeCodificado[i] == "(") { // Verifica si existe un paréntesis de apertura y de cierre, y si es así, se procede a decodificar el mensaje que está adentro
        let j = i;

        while(j < mensajeCodificado.length && mensajeCodificado[j] != ")") { // recorre el fragmento contenido entre paréntesis
            palabraADecodificar += mensajeCodificado[j];
        j++;
    }
        i = j;
            
    // Decodificar la palabra
    for(let z = palabraADecodificar.length - 1; z >= 0; z--) { // Se recorre el fragmento contenido entre paréntesis en el orden de último a primero 
        if(palabraADecodificar[z] != "(" && palabraADecodificar[z] != ")") { // Cada carácter que no sea un paréntesis se agrega a mensajeDecodificado
        mensajeDecodificado += palabraADecodificar[z];
        }
    }
        palabraADecodificar = "";
    } else {
        mensajeDecodificado += mensajeCodificado[i]; // Si el carácter no es un paréntesis de apertura, se agrega al mensajeCodificado
        }
    }

    alert(mensajeDecodificado);
}