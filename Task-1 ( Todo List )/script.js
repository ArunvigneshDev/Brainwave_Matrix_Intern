document.getElementById('btn').addEventListener('click', function addTodo() {
    var todoInput = document.getElementById('todoInput');
    var todoValue = todoInput.value.trim();

    if (todoValue) {
        var todoDiv = document.createElement('div');
        todoDiv.textContent = todoValue;

        var todoAction = document.createElement('div');
        todoAction.classList.add('todo-actions');

        var delImg = document.createElement('img');
        delImg.src = 'images/th-removebg-preview.png';
        delImg.alt = 'Delete';
        delImg.width = 25;
        delImg.height = 25;
        delImg.addEventListener('click', function () {
            todoDiv.remove(); 
        });

        var doneImg = document.createElement('img');
        doneImg.src = 'images/th__1_-removebg-preview.png';
        doneImg.alt = 'Done';
        doneImg.width = 25;
        doneImg.height = 25;
        doneImg.addEventListener('click', function () {
            todoDiv.style.textDecoration = "line-through";
        });

        todoAction.appendChild(doneImg);
        todoAction.appendChild(delImg);
        todoDiv.appendChild(todoAction);

        var todoItems = document.getElementById('todoItems');
        todoItems.appendChild(todoDiv);

        todoInput.value = '';
    } else {
        alert('Please enter a todo!');
    }
});