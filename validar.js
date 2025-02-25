function validar(form) {
    // Validar nombre
    var nombre = form.nombre.value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }

    // Validar edad
    var edad = form.edad.value.trim();
    if (edad === "" || isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return false;
    }

    // Validar selección de sexo
    var sexo = form.sexo.value;
    if (sexo === "") {
        alert("Por favor, seleccione su sexo.");
        return false;
    }

    // Validar deporte favorito
    var deporte = form.deporte.value;
    if (deporte === "ninguno" ) {
        alert("Por favor, seleccione un deporte favorito.");
        return false;
    }
    if (Validar(nombre) === true) {
        alert("Porfavor, no intente ingresar ningun tipo de etiquita especial");
        sexo = null;
        deporte = null;
        edad = null;
        nombre = null;
        return false;
    }

    // Si todo es válido
    alert("los datos son validos :)")
    return true;
}

function Validar (texto){
    const etiquetas= /<[^>]+>/;
    return etiquetas.test(texto);
}