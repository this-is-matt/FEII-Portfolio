import {
    readFromLS,
    writeToLS
} from "./ls.js";

const todoObj = {
    id: '',
    content: '',
    completed: ''
};
let todoList = getTodos();

function SaveTodo(input) {
    const todo = Object.create(todoObj);
    todo.content = input;
    todo.id = Date.now()
    todo.completed = false;

    //key is ID 
    let index = todoList.length;
    todoList[index] = todo;

    writeToLS(todo.id, todo);
    console.table(todoList);
}

function getTodos() {
    var list = [];
    var keys = Object.keys(localStorage);
    var i = keys.length;
    while (i--) {
        list.push(readFromLS(keys[i]));
    };
    return list;
}
class Todo {
    addTodo(listContainer, task) {
        const input = task.value;

        SaveTodo(input);

        const taskItem = document.createElement("p");
        taskItem.setAttribute("class", "item")
        taskItem.textContent = input;

        listContainer.appendChild(taskItem);

        const doneBtn = document.createElement('span');
        taskItem.appendChild(doneBtn);
        doneBtn.setAttribute("class", "doneBtn");
        doneBtn.textContent = '✔';


        //reset
        task.value = '';
        // want to add a pointer reset if i get time
    }
};


export default Todo;