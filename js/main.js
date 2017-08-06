/* Holiii acá va tu código también */
/*PROBANDO SIDEBAR JS - PASADO A JQUERY*/
$('#openNav').click(function(){
	$('#mySidenav').width('250px');
});
$('#closeNav').click(function(){
	$('#mySidenav').width('0');
});
/*FIN SIDEBAR*/

/*PARTE VALIDACION INDEX*/
$('#btn-sesion').click(function(){
	/*PONER VALIDACION DE DATOS*/
	var vali = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
	var inputmail = $('#mail').val();
	var clave = $('#pass').val();
	console.log(clave);
	//console.log (inputmail);
	//console.log (vali.test(inputmail));
	if (vali.test(inputmail)==false){
		$('.errormail').show();
	}else{
		$('.errormail').hide();
		//alert("mail correcto");
		//document.location.href= "menu_app.html";
	}
	if(clave.length>8 || isNaN(clave)==true || clave==''){
		$('.errorpass').show();
	}else{
		$('.errorpass').hide();
		//alert("pass correcto");
	}
	if(vali.test(inputmail)==true && inputmail!=='' && clave.length<8 && isNaN(clave)==false & clave!==''){
		localStorage.mail = inputmail;
		console.log(localStorage.mail);
		//$('#lsmail').append('<p>'+localStorage.mail+'</p>');
		document.location.href= "menu_app.html";
	}
});

/*REDIRECCIONAMIENTO DE MENU_APP*/
$('#saldo').click(function(){
	document.location.href = "saldo.html";
});
$('#tarifa').click(function(){
	document.location.href = "tarifa.html";
});
$('#perfil').click(function(){
	document.location.href = "perfil.html";
	//console.log(localStorage.mail);
});

$('#lsmail').append(localStorage.getItem('mail'));
	console.log(localStorage.getItem('mail'));

$('#faq').click(function(){
	document.location.href = "faq.html";
});

/*Guardar tarjetas con localStorage*/
var num = 0;
var arreglo = [];
$('#tarjeta').click(function(){
	var tarj = $('#numtarjeta').val();
	//localStorage.num = tarj;
	//console.log(localStorage.num);
	//arreglo[num]=tarj;
	localStorage.setItem(num, tarj);
	//console.log (arreglo[num]);
	num ++;
	$('#tarjetas').append('<p class="card">'+tarj+'</p>');

})

/*API*/

	
for(var i=0; i<localStorage.length-1; i++){
		console.log(localStorage.getItem(i));
		$('#selectSaldo').append(
			'<option value="'+localStorage.getItem(i)+'">'+localStorage.getItem(i)+'</option>');
	}

$('#versaldo').click(function(){
	//var inputsaldo = $('#ntarjeta').val();
	//inputsaldo = $('#selectSaldo').val();
	//console.log (inputsaldo);
	var inputsaldo = 0;
	if($('#ntarjeta').val()==""){
		inputsaldo = $('#selectSaldo').val();
		console.log("ingresoselect"+inputsaldo);
	} else{
		inputsaldo = $('#ntarjeta').val();
		console.log("ingresotarjeta"+inputsaldo);
	}

	$.ajax({
		url: 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+inputsaldo,
		type: 'GET',
		datatype: 'JSON',
	})
	.done(function(response) {
            console.log(response);
            $('#muestrasaldo').append("<div class='navsaldo'>SALDO TOTAL</div>"+
            	"<div class='headersaldo'>" + response.saldoTarjeta + "</div>");
        })
        .fail(function() {
            console.log('Error al conectar a la Api')
        })
        .always(function() {
            console.log('Completado')
        });
})

$('#calctarifa').click(function(response){
	var inputsaldo = $('#ntarjeta').val();
	var tarifa = $('#selectTarifa').val();
	console.log (inputsaldo);
	console.log (tarifa); 

	$.ajax({
		url: 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+inputsaldo,
		type: 'GET',
		datatype: 'JSON',
	})
	.done(function(response) {
            console.log(response);
            var numsaldo = response.saldoTarjeta;
            //console.log(numsaldo);
            var quitardig = numsaldo.replace("$","");
            //console.log (quitardig);
            var quitarpunto = quitardig.replace(".","");
            //console.log(quitarpunto);
            var saldo = parseInt(quitarpunto);
            console.log (saldo);
            var final = saldo - tarifa
            $('#muestratarifa').append("<div class='navsaldo'>COSTO PASAJE</div>"+
            	"<div class='headersaldo'>" + tarifa + "</div>"+
				"<div class='navsaldo'>SALDO FINAL</div>"+
            	"<div class='headersaldo'>" + final + "</div>");
        })
        .fail(function() {
            console.log('Error al conectar a la Api')
        })
        .always(function() {
            console.log('Completado')
        });

	
})

/*
$(document).ready(function() {
	$.ajax({
		url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip={id}',
		type: 'GET',
		datatype: 'JSON',
	})
	.done(function(response) {
            console.log('prueba');
            console.log(response);
        })
        .fail(function() {
            console.log('error')
        })
        .always(function() {
            console.log('complete')
        });
});

*/