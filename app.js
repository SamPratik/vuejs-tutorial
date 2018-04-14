new Vue({
  el: '#vue-app',
  data: {
    output: 'Your favorite food'
  },
  methods: {
    readRefs: function() {
      // Showing all the references...
      console.log(this.$refs);
      // changing the value of output with input value...
      this.output = this.$refs.input.value;
    }
  }
})
