$(document).foundation()

// IR ARRIBA
// ======================
$('.ir-arriba').click(function(){
	$('body, html').animate({
		scrollTop: '0px'
	}, 1200);
})

$(window).scroll(function(){
	if( $(this).scrollTop() > 0 ){
		$('.ir-arriba').slideDown(200);
	} else {
		$('.ir-arriba').slideUp(200);
	}
});

// Esto muestra un mensaje en la consola
console.log('Este mensaje es solo para que se muestre en la "consola"')

// Ejercicio Bucle while
var resultado = 0; //variable acumuladora
var numero = 100; //variable condicional
var i = 0; //variable de control
 
while(i <= numero) {
  resultado = resultado + i;
  i = i + 1;
}
 
console.log('***************************\n Aquí se ve el resultado del ejercicio para Bucle While ' + resultado);

// Ejercicio 1 Bucle For
var mensaje = "Hola, estoy dentro de un bucle... ";
 
for(var i = 0; i < 5; i++) {
}
console.log('***************************\n Aquí se ve el resultado del ejercicio 1 para Bucle For ' + mensaje + 'Este Nº de veces = ' + i);


// Ejercicio 2 Bucle For
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
 
console.log('***************************\n Aquí se ve el resultado del ejercicio 2 para Bucle For');

for(var i=0; i<7; i++) {
  console.log(dias[i]);
}

// Ejercicio 1 de If...Else
console.log('***************************\n Aquí se ve el resultado del ejercicio 1 para If...Else');
var edad = 18;
if(edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Todavía eres menor de edad");
}
// Ejercicio 2 de If...Else
$('#ejemplo-if2').click(function(){
	var nombre = prompt('Por favor indica tu nombre: ');
	if(nombre == "") {
	alert("Aún no nos has dicho tu nombre");
	}else {
	alert("Hemos guardado tu nombre");
	}
});

// Ejercicio de funciones nativas
$('#ejemplo-nativas').click(function(){
	var usuario = prompt('Por favor, ingresa tu nombre de usuario:');

	if (usuario && usuario.trim()) {
		var confirmar = ('¿Es ' + usuario + ' correcto?');

		if (confirmar) {
			alert('Usuario correcto')
		}else {
			alert('Usuario incorrecto')
		}
	}else{
		alert('No has introducido un usuario válido');
	}
});

// Ejercicio de typeof
$('#ejemplo-typeof').click(function(){
	var respuesta = prompt('Ingrese un string:');

	if (typeof respuesta === 'string') {
		alert('Correcto')
	}else{
		alert('Error, el tipo de valor es ' + typeof respuesta);
	}
});

// Ejemplo funcion 1
$('#ejemploFuncion1').click(function(){
	
	var nombreUsuario = prompt('Ingresa tu nombre:');

	function mostrarNombre(nombre) {
		alert(nombre);
	}

	mostrarNombre(nombreUsuario);
});

// Ejemplo funcion 2
$('#ejemploFuncion2').click(function(){

	var anyo;

	anyo = prompt('Ingrese el Año:','');
	anyo = parseInt(anyo)

	function bisiesto(anyoAnalizar) {
		if ((((anyoAnalizar%100)!=0) && ((anyoAnalizar%4)==0)) || ((anyoAnalizar%400)==0)){
			alert('El año es bisiesto: ');
		}else{
			alert('El año no es bisiesto: ');
		}
	}

	bisiesto(anyo);
});

// Ejemplo funcion 4
$('#ejemploFuncion4').click(function(){

	var precioNeto  =  prompt('Ingrese el monto sin impuestos:');
	precioNeto  =  parseFloat(precioNeto);
	var impuestos  =  prompt('Ingrese el % de impuestos:');
	impuestos  =  parseFloat(impuestos);
	var flete  =  prompt('Ingrese monto del flete:');
	flete  =  parseFloat(flete);

	function calculaPrecioTotal(precio, porcentajeImpuestos) {
	    var precioConImpuestos = (1 + porcentajeImpuestos/100) * precio;
	    var precioTotal = precioConImpuestos + flete;

	    return precioTotal.toFixed(2);
	}	   
	var resultadoFinal = calculaPrecioTotal(precioNeto, impuestos);
	alert("El resultado es " + resultadoFinal);
});

// Ejemplo métodos en arrays
$('#ejemploMetodoArray').click(function(){

	var colores = ['amarillo' , 'azul' , 'aguamarina' , 'beige' , 'blanco' , 
	'dorado' , 'gris' , 'negro' , 'marrón' , 'rojo' , 'verde' , 'vinotinto'];

	alert("Los colores disponibles son: " + colores);
	var colorElegido  =  prompt('Ingrese el color que desee borrar:');
	colorElegido = colorElegido.toLowerCase();

	function borrarColor(color,matriz) {

		var indice = matriz.indexOf(color);

		if (indice > -1) {
			// El color SI existe
			matriz.splice(indice,1);
		}
		else {
			// El color no existe
			alert('Este color no existe en la matriz.')
		}
	}

	borrarColor(colorElegido, colores);
	alert("Los colores que quedaron son: " + colores);
});

//Ejemplo recorrido de matriz con for
$('#ejemploMatriz1').click(function(){
	var paises = ["Argentina" , "Bolivia" , "Brasil" , "Chile" , "Colombia" , "Ecuador" , "Guyana" , "Paraguay" , "Perú" , "Surinam" , "Uruguay" , "Venezuela"];

	var longitud = paises.length, i = 0;

	for (i; i < longitud; i=i+1) {
		$('#resultadoMatriz1').append('<li>'+'&nbsp;'+paises[i]+'&nbsp;'+'</li>');
	}
});

//Ejemplo recorrido de matriz con forEach
$('#ejemploMatriz2').click(function(){

	var paises2 = ["Argentina" , "Bolivia" , "Brasil" , "Chile" , "Colombia" , "Ecuador" , "Guyana" , "Paraguay" , "Perú" , "Surinam" , "Uruguay" , "Venezuela"];

	function verMatriz2(elemento){
		$('#resultadoMatriz2').prepend('<li>'+'&nbsp;'+elemento+'&nbsp;'+'</li>')
	}

	paises2.forEach(verMatriz2);
});

// Función recursiva
(function() {
	console.log('****************')
	console.log('Hola desde IIEF')
	// Inmediately Invoked Function Expression
})();

//Ejemplo Enclosures
$('#ejemploEnclosures').click(function(){
	function inicia() {
		var nombre = "Mozilla"; // 'nombre' es una variable local creada por la función 'inicia'
		function muestraNombre() { // 'muestraNombre' es una función interna (un closure)
			alert(nombre); // dentro de esta función usamos una variable declarada en la función padre
		}
		muestraNombre();
	}
	inicia();
});

//Ejemplo closure con bucles
$('#ejemploEnclosures2').click(function(){

	for (var i=1; i<=10; i++){
		(function(z){
			setTimeout(function(){
				$('#resultadoEnclosures2').html(z+' seg.')
			},z * 1000);
		})(i);
	}
});

// Ejercicio objetos 1
console.log('**********************');
console.log('Ejercicio objetos 1:');

var opino = "Es uno de mis libros preferidos.";

var libro = {
	titulo: 'Escultismo para muchachos.',
	autor: 'Robert Baden-Powell',
	genero: 'Educación',
	valoracion: 9,
	tags: ['Escultismo','Niños','Scouts','Exploración','Vida al aire libre','Aprender haciendo'],
	opinion: opino,
};

console.log(libro.opinion);
// Muestra "Es uno de mis libros preferidos."

console.log(libro.tags[4]);
// Muestra 'Vida al aire libre'

console.log(libro.autor);
// Muestra 'Robert Baden-Powell'

// **********************************
// Ejemplo recorrer objeto con for
$('#ejemploObjet1').click(function(){
	
	for (var propiedad in libro) {
		$('#resultadoObjet1').append('<li>'+'&nbsp;'+propiedad+'&nbsp;'+'</li>')
	}
});

// Ejemplo recorrer objeto con Object.keys(o)
$('#ejemploObjet2').click(function(){

	var llaves = Object.keys(libro);

	$('#resultadoObjet2').html(llaves+',')
});

// Ejemplo recorrer objeto con Object.getOwnPropertyNames(o)
$('#ejemploObjet3').click(function(){

	var llaves = Object.getOwnPropertyNames(libro);

	$('#resultadoObjet3').html(llaves+',')
});
