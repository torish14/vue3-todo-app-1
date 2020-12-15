<template>
  <div class="card">
    <div>
      <span class="title">{{ todo.title }}</span>
      <span class="status" :class="todo.status">{{ todo.status }}</span>
    </div>
    <div class="body">作成日：{{ formatDate }}</div>
    <hr />
    <div class="action">
      <button @click="clickDelete">削除</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from '@/store/todo/types'
import { computed, defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  emits: ['delete'],
  setup(props, { emit }) {
    const clickDelete = () => {
      emit('delete', props.todo.id)
    }

    const formatDate = computed(() => {
      return `${props.todo.createdAt.getFullYear()}/${
        props.todo.createdAt.getMonth() + 1
      }/${props.todo.createdAt.getDate()}`
    })

    return {
      clickDelete,
      formatDate,
    }
  },
})
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  border: 1px solid;
  box-shadow: 2px 2px 4px gray;
  width: 250px;
}

.title {
  font-weight: 400;
  font-size: 25px;
  padding: 5px;
}

.status {
  padding: 3px;
}

.waiting {
  background-color: #e53935;
}

.working {
  background-color: #80cbc4;
}

.completed {
  background-color: #42a5f5;
}

.pending {
  background-color: #ffee58;
}

.body {
  margin: 5px;
}

.action {
  margin: 5px;
}
</style>
