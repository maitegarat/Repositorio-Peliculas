const LISTA_PELICULAS = "https://raw.githubusercontent.com/maitegarat/Repositorio-Peliculas/main/listado.json";

function cargarDatos(url) {
    document.getElementById("contenedor").innerHTML = "";
   
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
                      
            var portada = "";

            for (let i = 0; i < datos.length; i++) {

                if (datos[i].portada == 0) {
                    portada = '<img src="img/elpadrino.jpg" height="20">'
                } else if (datos[i].portada == 1) {
                    portada = '<img src="img/yourname.jpg" height="20">'
                } else if (datos[i].portada == 2) {
                    portada = '<img src="img/pulpfiction.jpg" height="20">'
                }else if (datos[i].portada == 3) {
                    portada = '<img src="img/elcaballerooscuro.jpg" height="20">'
                }else (datos[i].portada == 4); {
                    portada = '<img src="img/forestgump.jpg" height="20">'
                }

            var lista = "";
            lista += `
 
                        <h2>${datos[i].nombre}</h2>
                        <p>${datos[i].sinopsis}</p>
                        <p>${datos[i].director}</p>
                        <p> `+ portada + `</p>
                        `;
                    
                        document.getElementById("contenedor").innerHTML += lista;
            };

        })
        .catch(error => alert("Hubo un error: " + error));
}
