const clearButton = document.getElementById('clearBtn');
const dateEl = document.querySelector('.date-heading');
const todoList = document.getElementById('todo-list');
const addTodoButton = document.getElementById('addBtn');
const todoInput = document.getElementById('todoInput');
const todoError = document.querySelector('.todo-error');

addTodoButton.addEventListener('click', createTodo);
clearButton.addEventListener('click', clearTodoList);

(function getCurrentDate() {
	const today = new Date();
	const dayName = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
	const monthName = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
	const currentDay = `${dayName[today.getUTCDay()]}, ${today.getUTCDate()} ${monthName[
		today.getUTCMonth()
	]} ${today.getUTCFullYear()}`;
	dateEl.textContent = currentDay;
})();

function createTodo(event) {
	if (todoInput.value === '') {
		todoError.classList.remove('hide');
		setTimeout(clearError, 3000);
	} else {
		const todoInputValue = todoInput.value;

		const todoListItem = document.createElement('li');
		todoListItem.classList.add('todo-item');

		const checkTodoButton = document.createElement('button');
		checkTodoButton.classList.add('check-button');
		checkTodoButton.innerHTML = '<i class="fas fa-check hide"></i>';

		const todoText = document.createElement('p');
		todoText.classList.add('todo-text');
		todoText.textContent = todoInputValue;

		const deleteTodoButton = document.createElement('button');
		deleteTodoButton.classList.add('trash-button');
		deleteTodoButton.innerHTML = ' <i class="far fa-trash-alt"></i>';

		todoListItem.appendChild(checkTodoButton);
		todoListItem.appendChild(todoText);
		todoListItem.appendChild(deleteTodoButton);
		todoList.appendChild(todoListItem);

		todoInput.value = '';
		todoError.classList.add('hide');

		checkTodoButton.addEventListener('click', checkTodo);
		deleteTodoButton.addEventListener('click', deleteTodo);

		function checkTodo() {
			checkTodoButton.firstChild.classList.toggle('hide');
			todoText.classList.toggle('checked');
		}

		function deleteTodo() {
			deleteTodoButton.parentElement.remove();
		}
	}
}

function clearError() {
	todoError.classList.add('hide');
}

function clearTodoList() {
	while (todoList.firstChild) {
		todoList.removeChild(todoList.firstChild);
	}
}
