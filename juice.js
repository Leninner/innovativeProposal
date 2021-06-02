const visitante = prompt("Cuál es tu nombre?");
saludo(visitante);

function saludo(nombre) {
    alert(
        "Hola, " +
            nombre.trim().replace(/^\w/, (c) => c.toUpperCase()) +
            " es un gusto saludarte!"
    );
}
