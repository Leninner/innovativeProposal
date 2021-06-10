const visitante = prompt("Cuál es tu nombre?");
saludo(visitante);

function saludo(nombre) {
    if (
        nombre.trim().replace(/^\w/, (c) => c.toUpperCase()) == "Luis" ||
        nombre.trim().replace(/^\w/, (c) => c.toUpperCase()) == "Erick" ||
        nombre.trim().replace(/^\w/, (c) => c.toUpperCase()) == "Bryan"
    ) {
        alert("Hola manquito");
    } else {
        alert(
            "Hola, " +
                nombre.trim().replace(/^\w/, (c) => c.toUpperCase()) +
                " es un gusto saludarte!"
        );
    }
}
