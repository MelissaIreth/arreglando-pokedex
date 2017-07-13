$(document).ready(function(){

	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon/',
		type: 'GET',
		dataType: 'JSON',
		data: {'limit': '10'},
	})
	.done(function(respuesta){
		console.log(respuesta)
		mostrarPokemon(respuesta.results)
		console.log("succes");
	})
	.fail(function(){
		console.log("error");
	})
	.always(function(){
		console.log("complete");
	})

	var mostrarPokemon = function(data){

	    data.forEach(function(e){
	    	var pokeName = e.name;
	    	$("#pokepoke").append("<div class='thepoke'><img class='pokeImg' src='http://img.pokemondb.net/artwork/"+ pokeName + ".jpg'><span class='pname'>"+ pokeName +"</span><a class='modalpoke'><img src='assets/img/favicon.ico'></a><h3>Habities: </h3></div> ");
	    })
	};

	var habilidades = function(d){
		
		d.forEach(function(a){
			var ab = a.name;
				$(".thepoke").append('<p class="hab">'+ab+'</p>')
		})
		
	};

		$.ajax({
			url: 'http://pokeapi.co/api/v2/ability',
			type: 'GET',
			dataType: 'json',
			data: {'limit': '10'},
		})
		.done(function(res) {
			console.log("success");
			habilidades(res.results)

		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

});