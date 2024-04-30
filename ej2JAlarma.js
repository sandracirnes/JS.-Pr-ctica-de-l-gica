function empezarAlarma() {
    let seconds = parseInt(prompt("Escribe los segundos para que suene la alarma:"));

    if (isNaN(seconds) || seconds <= 0) {
        alert("Por favor, ingresa números positivos para tu alarma");
        return;
    }

    setTimeout(() => {
        alert("¡El tiempo se termino!");
    }, seconds * 1000);
}

empezarAlarma();