import {Todo as td, todoList as list} from "./todos.js";
import {
     onTouch,
    qs
} from "./utilities.js";
//vars
var listContainer = qs(".listContainer");
const btn = qs(".add-btn");
const input = qs(".input");
const options = qs("options");



const Todo = new td(list, listContainer);
onTouch(btn, Todo.addTodo, input);
onTouch(btn, Todo.renderTodoList, list, listContainer);