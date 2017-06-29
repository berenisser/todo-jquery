$(document).ready(function(){
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
				  var nuevoCheckbox = $('<input type="checkbox" id="idtask" class="checkbox">');
				  var nuevoLabel = $('<label for="idtask"></label>');
				  var removeButton = $('<a class="waves-effect waves-light btn right remove">Remove</a>');

				  nuevoDiv.append(nuevoCheckbox)
				  .append(nuevoLabel.html(taskToAdd))
				  .append(removeButton);

				  return nuevoDiv;
				} 


				//the value of the new task is passed as an argument in the makeNewListItem function; a new list item is returned and stored as the variable of listItemToAdd
				var listItemToAdd = crearTask(tareaInput);
				$("#items").append(listItemToAdd);
				//$("#items").append('<div class="tarea-padre"><input type="checkbox" class="filled-in" id="idtask"/><label for="idtask">'+ tareaInput +'</label><a class="waves-effect waves-light btn right">Remove</a></div>');
				//return false;
			}

			//Para remover la tarea de clase .remove
			$('.remove').click(function(){
				$(this).parent().remove();
			})

			//cuando se le da click al checkbox en la seccion "To do" 
			$("#items").on( "click", "input.checkbox", function(){ 
			 var listItem = $(this).parent();
			 $("#completed").append(listItem);
			})

			//cuando se le da click al checkbox en la seccion "Completed" 
			$("#completed").on( "click", "input.checkbox", function(){
			 var listItem = $(this).parent();
			 $("#items").append(listItem);
			})
		}
	})
});




