<template>
<div>
  <p>Current value: {{ value }}</p>
  <button v-on:click="onUpdate(1)">+1</button>
  <button v-on:click="onUpdate(-1)">-1</button>
</div>
</template>

<script>
export default {
  props: [
    'value',
    'onUpdate'
  ],
  name: 'Counter'
}
</script>

<style scoped>

</style>
