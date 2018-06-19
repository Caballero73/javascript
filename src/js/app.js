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
console.log('***************************\n Aquí se ve el resultado del ejercicio 2 para If...Else');
var nombre = "";
if(nombre == "") {
console.log("Aún no nos has dicho tu nombre");
}else {
console.log("Hemos guardado tu nombre");
}