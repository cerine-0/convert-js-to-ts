const { addTodo, toggleTodo, getTodos } = require("./todo");
// for typeScript import { addTodo, toggleTodo, getTodos } = require("./todo");
// Example usage
addTodo("Learn JavaScript");
addTodo("Convert to TypeScript");

console.log("All Todos:", getTodos());

toggleTodo(getTodos()[0].id);

console.log("After toggling:", getTodos());
