export type ToDo = {
  id: number;
  title: string;
  done: boolean;
};

let todos: ToDo[] = [];

export function addTodo(title: string): void {
  const todo: ToDo = { id: Date.now(), title, done: false };
  todos.push(todo);
}

export function toggleTodo(id: number): void {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
}

export function getTodos(): ToDo[] {
  return todos;
}
