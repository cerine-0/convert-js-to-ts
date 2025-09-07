import { addTodo, toggleTodo, getTodos } from "./todo.js";

addTodo("Learn JavaScript");
addTodo("Convert to TypeScript");

console.log("All Todos:", getTodos());

const firstTodo = getTodos()[0];
if (firstTodo) {
  toggleTodo(firstTodo.id);
}

console.log("After toggling:", getTodos());
