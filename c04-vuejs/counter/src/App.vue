<template>
  <div>
    <div>
      <Counter v-bind:value="value" v-bind:on-update="onUpdate"></Counter>
    </div>
    <div>
      <button v-on:click="onSubmit">Submit</button>
      <button v-on:click="onReset">Reset</button>
    </div>
    <div>
      <code><pre>{{ log }}</pre></code>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter'
import axios from 'axios'

export default {
  name: 'app',
  data: () => ({
    value: 0,
    log: ''
  }),
  methods: {
    onUpdate (delta) {
      this.value += delta
    },
    onSubmit () {
      // alert(`submit value: ${this.value}`)
      axios.post(
        'https://httpbin.org/post',
        {
          value: this.value
        }
      ).then(response => this.addLog(response.data.data))
    },
    onReset () {
      this.value = 0
    },
    addLog (s) {
      this.log += `\n${new Date()} ${JSON.stringify(s)}`
    }
  },
  components: {
    Counter
  }
}
</script>

<style>

</style>
