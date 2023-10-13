// ARRAY DONDE SE AGREGAN LOS OBJETOS CREADOS
const gatitos = [
];


// FUNCION QUE PERMITE MOSTRAR EN PANTALLA LAS TARJETAS DE LOS OBJETOS CREADOS
function mostrarGatito(){
  let texto = "";
  for(let gatito of gatitos){
    document.getElementById("contenedor__texto").innerHTML = gatito.toString();
      setTimeout(() => {
        document.getElementById("contenedor__texto").innerHTML = " ";
      }, 6000)
    texto += ` 
            <div class="contenedor__infoGatito">
              <div class="contenedor__info">
                <div class="contenedor__img">
                  <img class="imagen" src="css/images/${gatito.raza}.jpg" alt="Imagen Gatito">
                </div>
                <div class="informacion">
                  <ul class="informacion__lista">
                    <li><p>Nombre: ${gatito.nombre}</p></li>
                    <li><p>Raza: ${gatito.raza}o</p></li>
                    <li><p>Edad: ${gatito.edad}</p></li>
                    <li><p>Peso: ${gatito.peso}</p></li>
                  </ul>
                </div>
              </div>
              <button class="btn__eliminar" onclick="eliminarGatito(${gatito._idGatito})">Eliminar Gatito</button>
            </div>`;
  }
  document.getElementById("contenedor__infoGatitos").innerHTML = texto;
  
}

//FUNCION CREADORA DE OBJETOS
function agregarGatito() {
  const form = document.forms["form"];
  const nombre = form["gato-nombre"];
  const sexo = form["gato-sexo"];
  const raza = form["gato-raza"];
  const edad = form["gato-edad"];
  const peso = form["gato-peso"];

  if(raza.value==="Raza" || !nombre.value || !sexo.value || !edad.value || !peso.value){
    document.getElementById("contenedor__texto").innerHTML = "Porfavor, llena todos los campos";
    setTimeout(() => {
      document.getElementById("contenedor__texto").innerHTML = " ";
    }, 4000);
  } else {
    const gatito = new Gato(nombre.value, sexo.value, raza.value, edad.value, peso.value);
    gatitos.push(gatito);
    form.reset();
    mostrarGatito();
  }
};

//FUNCION QUE ELIMINA EL INDICE DEL ARRAY SELECCIONADO
function eliminarGatito(id){
  const i = gatitos.findIndex((gatito) => {
    return gatito._idGatito == id;
  });
  gatitos.splice(i, 1);
  mostrarGatito();
}
