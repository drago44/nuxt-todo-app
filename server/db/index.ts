export type Todo = {
  id: string;
  item: string;
  completed: boolean;
};

export const db: { todos: Todo[] } = {
  todos: [],
};
