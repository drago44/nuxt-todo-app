import { Todo } from '@/server/db';

const useTodos = () => {
  const { data: todos, refresh } = useAsyncData<Todo[]>('todos', () => {
    return $fetch('/api/todo');
  });

  const addTodo = async (item: string) => {
    if (!item) return;
    await $fetch('/api/todo', { method: 'post', body: { item } });
    refresh();
  };

  const updateTodo = async (id: string) => {
    await $fetch(`/api/todo/${id}`, { method: 'put' });
    refresh();
  };

  const deleteTodo = async (id: string) => {
    await $fetch(`/api/todo/${id}`, { method: 'delete' });
    refresh();
  };

  return { todos, addTodo, updateTodo, deleteTodo };
};

export default useTodos;
