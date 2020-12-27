<template>
  <h2>TODO一覧</h2>
  <app-error v-if="error" :error="error" />
  <Suspense v-else>
    <template #default>
      <AsyncTodos />
    </template>
    <template #fallback>
      <app-loading />
    </template>
  </Suspense>
  <router-link to="/new">新規作成</router-link>
</template>

<script lang="ts">
import { defineComponent, ref, onErrorCaptured } from 'vue'
import AsyncTodos from '@/components/AsyncTodos.vue'
import AppLoading from '@/components/AppLoading.vue'
import AppError from '@/components/AppError.vue'

export default defineComponent({
  components: {
    AsyncTodos,
    AppLoading,
    AppError,
  },
  setup() {
    const error = ref<unknown>(null)

    onErrorCaptured((e) => {
      error.value = e
      return true
    })

    return {
      error,
    }
  },
})
</script>
