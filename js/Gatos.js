
class Gato{
  static contadorGatitos = 0;
  constructor(nombre, sexo, raza, edad, peso){
    this._nombre = nombre,
    this._sexo = sexo,
    this._raza = raza,
    this._edad = edad,
    this._peso = peso,
    this._idGatito = Gato.contadorGatitos++
  }

  get nombre(){
    return this._nombre;
  }
  set nombre(nombre){
    this._nombre = nombre;
  }

  get sexo(){
    return this._sexo;
  }
  set sexo(sexo){
    this._sexo = sexo;
  }

  get raza(){
    return this._raza;
  }
  set raza(raza){
    this._raza = raza;
  }

  get edad(){
    return this._edad;
  }
  set edad(edad){
    this._edad = edad;
  }

  get peso(){
    return this._peso;
  }
  set peso(peso){
    this._peso = peso;
  }

  infoGatito(){
    if(this.raza == "Calic"){
        return `La Gatita se llama ${this._nombre}, es una gatita ${this._raza}o, tiene ${this._edad} años y pesa ${this._peso} kilos`;
    }else if(this._sexo == "hembra") {
        return `La Gatita se llama ${this._nombre}, es una gatita ${this._raza}a, tiene ${this._edad} años y pesa ${this._peso} kilos`;
    }else if(this._sexo == "macho"){
        return `El Gatito se llama ${this._nombre}, es un gatito ${this._raza}o, tiene ${this._edad} años y pesa ${this._peso} kilos`;
    }
  }

  toString(){
    return this.infoGatito();
  }
} //TERMINA CLASE "GATO"
