async function getTodos() {
    const todoList = document.getElementById("todoList");
    const url = 'https://jsonplaceholder.typicode.com/todos';
    try {
        const response = await fetch(url);
        const todos = await response.json();
        // console.log(data)
        todos.forEach(function(todo,index){
            const item = document.createElement('li');
            item.textContent = todo.title
            todoList.appendChild(item)
        })
        document.getElementById("spinner").classList.add('d-none');
        
    } catch (error) {
        alert(error);
    }

}

getTodos();