obtener_localstorage();
//guardar_localstorange();
function obtener_localstorage(){

	let nombre = localStorage.getItem("nombre");
	let persona = JSON.parse(localStorage.getItem("persona"));

	console.log(nombre);
	console.log(persona);
}

//metodo
function guardar_localstorange(){
	let persona =  {

		nombre: "Victor",
		edad: 31,
		correo: "Victor@gmail.com",
		coords: {
			lat: 10,
			lng: -10
		}

	};

	let nombre = "miguel";
	localStorage.setItem("nombre", nombre);
	localStorage.setItem("persona", JSON.stringify(persona) );

}