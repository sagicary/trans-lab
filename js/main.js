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
	//console.log (inputmail);
	//console.log (vali.test(inputmail));
	if (vali.test(inputmail)=="false"){
		//$('.errormail').text("Reingrese mail");
	}
	setTimeout("location.href='menu_app.html'", 1000);
	//document.location.href = "menu_app.html";
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
});
$('#faq').click(function(){
	document.location.href = "faq.html";
});

/*API*/
$('#versaldo').click(function(){
	var inputsaldo = $('#ntarjeta').val();
	console.log (inputsaldo);
	$.ajax({
		url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+inputsaldo,
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