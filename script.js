// ARRAY DONDE SE AGREGAN LOS OBJETOS CREADOS
const gatitos = [
];


// FUNCION QUE PERMITE MOSTRAR EN PANTALLA LAS TARJETAS DE LOS OBJETOS CREADOS
function mostrarGatito(){
  let texto = "";
  for(let gatito of gatitos){
    document.getElementById("contenedor-6").innerHTML = gatito.toString();
      setTimeout(() => {
        document.getElementById("contenedor-6").innerHTML = " ";
      }, 4000)
    texto += ` 
            <div class="contenedor-gatito1">
              <div class="contenedor-gatito2">
                <div class="contenedor-infoGatitos-img">
                  <img class="imagen-gatito" src="/images/${gatito.raza}.jpg" alt="Imagen Gatito">
                </div>
                <div class="contenedor-infoGatitos-info">
                  <ul class="infoGatitos-ul">
                    <li><p>Nombre: ${gatito.nombre}</p></li>
                    <li><p>Raza: ${gatito.raza}o</p></li>
                    <li><p>Edad: ${gatito.edad}</p></li>
                    <li><p>Peso: ${gatito.peso}</p></li>
                  </ul>
                </div>
              </div>
              <button class="boton-eliminar" onclick="eliminarGatito(${gatito._idGatito})">Eliminar Gatito</button>
            </div>`;
  }
  document.getElementById("contenedor-infoGatitos").innerHTML = texto;
  
}

//FUNCION CREADORA DE OBJETOS
function agregarGatito() {
  const form = document.forms["form"];
  const nombre = form["gato-nombre"];
  const sexo = form["gato-sexo"];
  const raza = form["gato-raza"];
  const edad = form["gato-edad"];
  const peso = form["gato-peso"];

  const gatito = new Gato(nombre.value, sexo.value, raza.value, edad.value, peso.value);
  gatitos.push(gatito);
  form.reset()
  mostrarGatito();
};

//FUNCION QUE ELIMINA EL INDICE DEL ARRAY SELECCIONADO
function eliminarGatito(id){
  const i = gatitos.findIndex((gatito) => {
    return gatito._idGatito == id;
  });
  gatitos.splice(i, 1);
  mostrarGatito();
}
