let tablero = document.getElementById("tablero");

for (let fila = 0; fila < 6; fila++) {

    for (let columna = 0; columna < 5; columna++) {

        let casilla = document.createElement("input");

        casilla.maxLength = 1;

        tablero.appendChild(casilla);
    }
}