new Vue({
  el: '#app',
  data: {
    name: 'Shaun',
    job: 'Ninja'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ', ' + this.name;
    }
  }
});
