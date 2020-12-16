<template>
  <h2>TODO一覧</h2>
  <ul>
    <todo-item
      v-for="todo in todoStore.state.todos"
      :key="todo.id"
      :todo="todo"
      @click-delete="clickDelete"
    >
    </todo-item>
  </ul>
  <router-link to="/new">新規作成</router-link>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import TodoItem from '@/components/TodoItem.vue'
import { todoKey } from '@/store/todo'

export default defineComponent({
  components: {
    TodoItem,
  },
  setup() {
    const todoStore = inject(todoKey)
    if (!todoStore) {
      throw new Error('todoStore is not provided')
    }

    const clickDelete = (id: number) => {
      todoStore.deleteTodo(id)
    }

    return {
      todoStore,
      clickDelete,
    }
  },
})
</script>
