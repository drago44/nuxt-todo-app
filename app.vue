<script setup lang="ts">
  const { todos, addTodo, updateTodo, deleteTodo } = useTodos();

  const input = ref('');

  const handleClick = () => {
    addTodo(input.value);
    input.value = '';
  };
</script>

<template>
  <div class="container">
    <NCard class="cards">
      <h1>Todo List</h1>
      <div class="add-todo">
        <input
          placeholder="Add a new todo..."
          v-model="input"
          @keyup.enter="handleClick"
        />
        <NButton n="green-500" @click="handleClick">Add</NButton>
      </div>
      <NCard class="card" v-for="todo in todos" :key="todo.id">
        <h4 :class="todo.completed ? 'complete' : null" class="red">
          {{ todo.item }}
        </h4>
        <div class="btn">
          <NButton @click="() => updateTodo(todo.id)" v-if="todo.completed"
            >Done</NButton
          >
          <NButton @click="() => updateTodo(todo.id)" v-if="!todo.completed"
            >Not done</NButton
          >
          <NButton n="red-500" @click="() => deleteTodo(todo.id)"
            >Delete</NButton
          >
        </div>
      </NCard>
    </NCard>
  </div>
</template>

<style scoped>
  .container {
    padding: 2rem 15px;
    margin: 0 auto;
    max-width: 50%;
  }
  .cards {
    padding: 2rem;
  }
  input {
    outline: none;
    width: 40%;
    padding: 0.5rem 1rem;
  }

  h1 {
    margin-bottom: 2rem;
  }
  .add-todo {
    display: flex;
    justify-content: space-between;
  }
  .card {
    padding: 0.5rem;
    margin-top: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .red {
    color: rgb(255, 112, 112);
  }
  .complete {
    color: greenyellow;
  }

  .btn {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
</style>
