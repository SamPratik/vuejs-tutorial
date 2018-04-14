new Vue({
  el: '#app',
  data: {
    a: 0,
    b: 0,
    age: 20
  },
  // if any of the variables(a/b) is updated both of the functions are
  // getting called which is not required. we only need to call that method
  // whose variable has been updated. we can use computed property instead
  // of methods...
  /*methods: {
    addToA: function() {
      console.log('addToA');
      return this.age + this.a;
    },
    addToB: function() {
      console.log('addToB');
      return this.age + this.b;
    }
  }*/
  computed: {
    addToA: function() {
      console.log('addToA');
      return this.age + this.a;
    },
    addToB: function() {
      console.log('addToB');
      return this.age + this.b;
    }
  }
});
