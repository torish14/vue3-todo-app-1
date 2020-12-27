<template>
  <div>
    {{ error.message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    error: {
      type: Object,
      requreid: false,
    },
  },
})
</script>
