function generarNumerosAleatorios() {
    var x0 = parseInt(document.getElementById('x0').value);
    var a = parseInt(document.getElementById('a').value);
    var c = parseInt(document.getElementById('c').value);
    var m = parseInt(document.getElementById('m').value);

    if (isNaN(x0) || isNaN(a) || isNaN(c) || isNaN(m)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }
    var xi = x0;
    var numerosAleatorios = [];

    for (var i = 0; i < 100; i++) {
        xi = (a * xi + c) % m;
        var u = xi / m;
        numerosAleatorios.push({ xi: xi, u: u });
    }
    mostrarNumerosEnPantalla(numerosAleatorios);
}

function mostrarNumerosEnPantalla(numerosAleatorios) {
    var outputDiv = document.getElementById('output');

    outputDiv.innerHTML = "<h3 class='h3'>Números Aleatorios Generados:</h3>";

    // Obtén los elementos
    var contenedor = document.getElementById('output');
    var elemento = document.querySelector(".h3");

    let des = document.querySelector(".des");

    if (des) {
        des.style.display = "none";
    }

    // Agrega un evento de desplazamiento al contenedor
    contenedor.addEventListener('scroll', function () {
        // Verifica la posición de desplazamiento
        if (contenedor.scrollTop > 15) { // Puedes ajustar el valor según tus necesidades
            // Cambia la clase del elemento
            elemento.classList.add('claseAlterna');
        } else {
            // Remueve la clase si no está desplazado lo suficiente
            elemento.classList.remove('claseAlterna');
        }
    });


    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    // Encabezados de la tabla
    var headerRow = document.createElement('tr');
    var headers = ["I", "Xi", "U = aleatorio"];
    headers.forEach(function (headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Datos de la tabla
    for (var i = 0; i < numerosAleatorios.length; i++) {
        var tr = document.createElement('tr');

        // Columna I
        var tdI = document.createElement('td');
        tdI.textContent = i + 1;
        tr.appendChild(tdI);

        // Columna Xi
        var tdXi = document.createElement('td');
        tdXi.textContent = numerosAleatorios[i].xi;  // Mostrar el valor de xi
        tr.appendChild(tdXi);

        // Columna U = aleatorio
        var tdU = document.createElement('td');
        tdU.textContent = numerosAleatorios[i].u.toFixed(4); // Limitar la cantidad de decimales para u
        tr.appendChild(tdU);

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    outputDiv.appendChild(table);
}

let nav = document.querySelector('.navbar');
let con = document.querySelector('.con');
let scrollThreshold = 0; // Puedes ajustar este valor según tus necesidades

// Agrega un evento de desplazamiento al documento
document.addEventListener('scroll', function () {
    // Verifica la posición de desplazamiento
    if (window.scrollY > scrollThreshold) {
        // Si la posición de desplazamiento es mayor que el umbral, haz que el nav sea fijo y cambia su color
        nav.classList.add('claseNavFijo');
        con.classList.add('claseBtn');
    } else {
        // Si no, remueve las clases
        nav.classList.remove('claseNavFijo');
        con.classList.remove('claseBtn');
    }
});