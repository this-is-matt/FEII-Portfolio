import {
    readFromLS,
    writeToLS
} from "./ls.js";
import { onTouch } from "./utilities.js";

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
        list.push(JSON.parse(readFromLS(keys[i])));
    };
    return list;
}

class Todo {
    constructor(list, listContainer) {
        this.renderTodoList(list, listContainer);
    }
    addTodo(task) {
        const input = task.value;

        SaveTodo(input); 
        //reset
        task.value = '';
        // want to add a pointer reset if i get time
    }
    // }
    renderTodoList(list, listContainer) {
        //need to clear listcontainer
        listContainer.textContent = "";
        //step through list, grab content render it. 
        list.forEach(element => {
            const input = element.content;
            const taskItem = document.createElement("li");
            taskItem.setAttribute("class", "item");
            taskItem.textContent = input;
            listContainer.appendChild(taskItem);
            const doneBtn = document.createElement('button');
            taskItem.appendChild(doneBtn);
            doneBtn.setAttribute("class", "doneBtn");
            doneBtn.textContent = '✔';

            onTouch(doneBtn, this.del, taskItem, doneBtn);
        });

        //add section to grab the length and send to screen
    }
    // itemClick(event, list) {
    //     console.log(event.target);
    //     // get item, check obj.completed, if false adjust obj.completed value to true, add element
    //     // if true, adjust to false and remove element.

    // }

    //if there is a list of item, the last one won't delete.
    //when i inout a task, it adds it to the localstorage, but not the DOM. Will add it if i refresh. will let me enter one before it breaks. 
    del(taskItem, doneBtn){
        // taskItem.removeChild(doneBtn);
        let content = taskItem.textContent;
        // alert(content);
        const iof = content.indexOf("✔")
        // alert(iof);
        content = content.slice(0,iof);
        // alert(content);

        todoList.forEach(element =>{
            if(element.content ===  content){
                const key = element.id;
                localStorage.removeItem(key);
                taskItem.remove(taskItem);
            };
            todoList = getTodos();

        })
    }


    // taskfilter(){
    // get button value
    //case "all"
    //show all 
    //case active
    //show only active
    //case complted
    // show only completed
    // }


};


export {
    Todo,
    todoList
};