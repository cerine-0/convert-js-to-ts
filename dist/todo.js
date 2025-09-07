let todos = [];
export function addTodo(title) {
    const todo = { id: Date.now(), title, done: false };
    todos.push(todo);
}
export function toggleTodo(id) {
    todos = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);
}
export function getTodos() {
    return todos;
}
//# sourceMappingURL=todo.js.map