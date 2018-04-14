// This is component named 'greeting' which is reused in both vue instances...
Vue.component('greeting', {
  template: '<p>Hey there, I am <strong>{{name}}</strong> <button v-on:click="changeName">Change Name</button></p>',
  data: function() {
    return {
      name: 'Pratik'
    }
  },
  methods: {
    changeName: function() {
      this.name = 'Samiul Alim Pratik';
    }
  }
});

var one = new Vue({
  el: '#vue-app-one',
  data: {

  },
  methods: {

  }
});

var two = new Vue({
  el: '#vue-app-two',
  data: {

  },
  methods: {

  }
});
