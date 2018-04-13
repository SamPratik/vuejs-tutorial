new Vue({
  el: '#app',
  data: {
    name: 'Shaun',
    job: 'Ninja',
    website: 'http://wnafoundation.org/'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ', ' + this.name;
    }
  }
});
