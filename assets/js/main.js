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
	    	$("#pokepoke").append("<div class='thepoke'><img class='pokeImg' src='http://img.pokemondb.net/artwork/"+ pokeName + ".jpg'><span class='pname'>"+ pokeName +"</span><a class='modalpoke'><img src='assets/img/favicon.ico'></a><p></p></div> ");
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
/* Esta es una manera que encontre de hacer el modal, 
está sin info dentro ya que primero quería lograr que se abriera el modal
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon-species/',
		type: 'GET',
		dataType: 'JSON',
		data: {'limit': '20'},
	})
	.done(function(respuest){
		console.log(respuest)
		modal(respuest.results)
		console.log("succes");
	})
	.fail(function(){
		console.log("error");
	})
	.always(function(){
		console.log("complete");
	})
		
	var modal = function(){
	  var 
	  method = {},
	  $overlay = $('<div id="overlay"></div>');
	  $modal = $('<div id="modal"></div>');
	  $content = $('<div id="content">Hola</div>');
	  $close = $('<a id="close" href="#">close</a>');

	  $modal.hide();
	  $overlay.hide();
	  $modal.append($content, $close);
	  // Append the HTML

	  // Center the modal in the viewport
	  method.center = function () {
		  var top, left;

		  top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
		  left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

		  $modal.css({
		    top:top + $(window).scrollTop(), 
		    left:left + $(window).scrollLeft()
		  });
		};;

	  // Open the modal
	  method.open = function (settings) {
		  $content.empty().append(settings.content);

		  $modal.css({
		    width: settings.width || 'auto', 
		    height: settings.height || 'auto'
		  })

		  method.center();

		  $(window).bind('resize.modal', method.center);

		  $modal.show();
		  $overlay.show();
		};


	  // Close the modal
	  method.close = function () {
		  $modal.hide();
		  $overlay.hide();
		  $content.empty();
		  $(window).unbind('resize.modal');
		};


		$close.click(function(e){
		  e.preventDefault();
		  method.close();
		});


	  return method;
	};


	$.get('ajax.html', function(data){
  	modal.open({content: data});
});


	var habilidades = function(url){
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			data: {'limit': '10'},
		})
	.done(function(respuesta) {
		console.log(respuesta);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});



	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon/',
		type: 'GET',
		dataType: 'JSON',
		data: {'limit': '10'},
	})
	.done(function(respuesta){
		console.log(respuesta)
		mostrarPokemon(respuesta.results)
		respuesta.results.forEach(function(a){
			habilidades(a.url)
			$(".thepoke").append('<p class="hab">'+habilidades(a.url)+'</p>')
		console.log("succes");
	})
	});
	

	var mostrarPokemon = function(data){

	    data.forEach(function(e){
	    	var pokeName = e.name;
	    	$("#pokepoke").append("<div class='thepoke'><img class='pokeImg' src='http://img.pokemondb.net/artwork/"+ pokeName + ".jpg'><span class='pname'>"+ pokeName +"</span><a class='modalpoke'><img src='assets/img/favicon.ico'></a><p></p></div> ");
	    })
	};

			
*/



/* Esta debería ser la info que muestra el modal

pokeName2 = el.name
"<div class='thepoke2' data-toggle='modal' data-target='#myModal'><img class='pokeImg2' src='http://img.pokemondb.net/artwork/"+ pokeName2 + ".jpg'>
<span class='pname2'>"+ pokeName2 +"</span></div> "*/