import td from "./todos.js";
import {
     onTouch,
    qs
} from "./utilities.js";
var listContainer = qs(".listContainer");
const btn = qs(".add-btn");
const input = qs(".input");
const options = qs("options");

const Todo = new td();
onTouch(btn, Todo.addTodo, listContainer, input);

console.log(listContainer);