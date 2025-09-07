let todos = [];

function addTodo(title) {
  todos.push({ id: Date.now(), title, done: false });
}

function toggleTodo(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
}

function getTodos() {
  return todos;
}

// Export functions
module.exports = { addTodo, toggleTodo, getTodos };
// for typeScript export = { addTodo, toggleTodo, getTodos };
