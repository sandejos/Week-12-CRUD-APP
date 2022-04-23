window.addEventListener('load', () => {
    const form = document.querySelector('#todo-list-item');
    const input = document.querySelector('#new-todo-item');
    const list = document.querySelector("#todo");

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        var todo = input.value;

        if(!todo){
            alert('No To Do Listed')
            return;
        } 

        var todoelement = document.createElement('div');
        todoelement.classList.add('todo');

        var todocontentelement = document.createElement('div');
        todocontentelement.classList.add('content');
        

        todoelement.appendChild(todocontentelement);

        var todoinput = document.createElement('input');
        todoinput.classList.add("text")
        todoinput.type = 'text';
        todoinput.value= todo;
        todoinput.setAttribute('readonly', 'readonly');

        todocontentelement.appendChild(todoinput)

        var todoactions = document.createElement('div');
        todoactions.classList.add('actions');

        var edittodos = document.createElement('button')
        edittodos.classList.add('edit');
        edittodos.innerHTML = "Edit";

        var deletetodos = document.createElement('button')
        deletetodos.classList.add('delete');
        deletetodos.innerHTML = "Delete"

        todoactions.appendChild(edittodos);
        todoactions.appendChild(deletetodos);

        todoelement.appendChild(todoactions);

        list.appendChild(todoelement);

        input.value ="";

        edittodos.addEventListener('click', () => {
            if(edittodos.innerText == "Edit"){
                todoinput.removeAttribute("readonly");
                todoinput.focus();
                edittodos.innerText="Save"
            } else { 
                todoinput.setAttribute("readonly", "readonly");
                edittodos.innerText = "Edit";
            }

        })

        deletetodos.addEventListener('click', () => {
            list.removeChild(todoelement);
            

        });
    });
});