var miAuto = { // es un objeto
    marca: "Toyota",// propiedades
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
      console.log(`Auto ${this.modelo} ${this.annio}`); // this referencia a miAuto (objeto)
    }
};
// funcion contructora
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
		this.annio = annio;
}

var autoNuevo = new
