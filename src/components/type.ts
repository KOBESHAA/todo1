export interface TodoItem {
  text: string;
  completed: boolean;
}
export interface Todo {
  color: string;
  items: TodoItem[];
  inputValue: string;
}
