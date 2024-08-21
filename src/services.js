// URL de nuestra Api simulada
const baseUrl = "http://localhost:3000/tasks";

// READ - Obtener todas las tareas
async function getTasks() {
	const response = await fetch(baseUrl, {
		method: "GET", // Método HTTP GET para obtener datos
		headers: {
			"Content-Type": "application/json", // Indica que estamos trabajando con JSON
		},
	});
	const tasks = await response.json(); // Convierte la respuesta en un objeto JSON
	return tasks; // Retorna la lista de tareas obtenida
}

// Obtener tarea por id
async function getTaskById(id) {
	// Implementar código para obtener una tarea según su id
}

// CREATE - Crear una nueva tarea
async function createTask() {
	const taskInput = document.getElementById("newTask");

	// Implementar código para crear una nueva tarea

}

// UPDATE - Actualizar el estado "completed"
async function updateTask(id) {
	const task = await getTaskById(id); // Obtiene la tarea por su ID
	task.completed = !task.completed; // Invierte el estado de "completed"

	const response = await fetch(`${baseUrl}/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(task),
	});

	if (response.ok) { // Si la actualización fue exitosa, recarga la lista de tareas
		getTasks();
	} else {
		console.error("Error al actualizar la tarea"); // Si ocurrió un error, lo muestra en la consola
	}
}

// DELETE - Eliminar una tarea
async function deleteTask(id) {
	const response = await fetch(`${baseUrl}/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		getTasks();
	} else {
		console.error("Error al eliminar la tarea");
	}
}

// Función para mostrar las tareas en el html
function renderTasks(tasks) {
	const taskList = document.getElementById("taskList"); // Selecciona el elemento UL donde se listarán las tareas

	const listItems = tasks.map((task) => {
        // Creación de un nuevo elemento <li> para cada tarea
		const li = document.createElement("li");
		li.textContent = task.title;
		// Si la tarea está completada, agrega la clase "completed" al <li>
        if (task.completed) {
			li.classList.add("completed");
		}
        
        // Crea un botón para eliminar la tarea
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Eliminar";
		deleteButton.onclick = () => deleteTask(task.id); // Asocia la función deleteTask al botón
        
        // Crea un botón para marcar la tarea como completada
		const completeButton = document.createElement("button");
		completeButton.textContent = "Completado";
		completeButton.onclick = () => updateTask(task.id); // Asocia la función updateTask al botón

        // Agrega los botones de eliminar y completar al <li>
		li.appendChild(deleteButton);
		li.appendChild(completeButton);
        // Agrega el <li> completo al elemento UL
		taskList.appendChild(li);
	});
}

// Obtener todas las tareas y luego mostrarlas en el html
// Llama a getTasks() y pasa el resultado a renderTasks para que las muestre
getTasks().then(renderTasks);