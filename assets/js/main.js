$(document).ready(function(){
	var counter = 0;
	$('#items').html(localStorage.getItem('listItems'));
	$('#completed').html(localStorage.getItem('listItems2'));

	$("#tarea-input").keypress(function(e){
		var key = e.which;
		if(key==13){
			var tareaInput = $("#tarea-input").val();
			$("#tarea-input").val("");
			
			if(tareaInput == ""){
				alert("You should add a task");
			} else{
				var crearTask = function(taskToAdd) {
					var nuevoDiv = $('<div class="tarea-padre"></div>');
					var nuevoCheckbox = $('<input type="checkbox" id="idtask-'+counter +' " class="checkbox">');
					var nuevoLabel = $('<label for="idtask-'+counter +' "></label>');
					var removeButton = $('<a class="waves-effect waves-light btn right remove">Remove</a>');

					nuevoDiv.append(nuevoCheckbox)
					.append(nuevoLabel.html(taskToAdd))
					.append(removeButton);

					return nuevoDiv;
				} 

				var listItemToAdd = crearTask(tareaInput);
				$("#items").append(listItemToAdd);
				//$("#items").append('<div class="tarea-padre"><input type="checkbox" class="filled-in" id="idtask"/><label for="idtask">'+ tareaInput +'</label><a class="waves-effect waves-light btn right">Remove</a></div>');
				//return false;
				localStorage.setItem('listItems', $('#items').html());

				counter++;
			}
		}

		//llamar funciones
		remove();
		check();
	});

	//Para remover la tarea de clase .remove me aseguro que sean de ambas "listas"
	function remove(){
		$('.remove').click(function(){
			$(this).parent().remove();
			localStorage.removeItem('listItems');
			localStorage.removeItem('listItems2');
		})
	}
		
	function check(){
		//cuando se le da click al checkbox en la seccion "To do" debe ir a la seccion de completado
		$("#items").on( "click", "input.checkbox", function(){ 
			var listItem = $(this).parent();
			$("#completed").append(listItem);
			localStorage.setItem('listItems2', $('#completed').html());
			localStorage.setItem('listItems', $('#items').html());
		})
	}
		

	/*
	//cuando se le da click al checkbox en la seccion "Completed" 
	$("#completed").on( "click", "input.checkbox", function(){
	 var listItem = $(this).parent();
	 $("#items").append(listItem);
	 //localStorage.setItem('listItems', $('#items').html());
	})*/

	//llamar funciones
	remove();
	check();
});




