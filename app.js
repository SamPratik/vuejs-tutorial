new Vue({
  el: '#app',
  data: {
    name: 'Shaun',
    job: 'Ninja',
    website: 'http://wnafoundation.org/',
    websiteTag: '<a href="http://wnafoundation.org/">NGO</a>'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ', ' + this.name;
    }
  }
});
