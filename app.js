var one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'Vue App One'
  },
  computed: {
    greet: function() {
      return 'Greetings from Vue App One';
    }
  }
});

var two = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'Vue App Two'
  },
  methods: {
    changeTitle: function() {
      one.title = 'Title Changed';
    }
  },
  computed: {
    greet: function() {
      return 'Greeting from Vue App Two';
    }
  }
});


two.title = 'Title Changed from outside';
