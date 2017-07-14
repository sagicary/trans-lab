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
	document.location.href = "menu_app.html";
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

