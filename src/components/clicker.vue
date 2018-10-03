var app = new Vue({
  el: '#app1',
  data: {
    message: '0'
  },
  methods: {
    clicker: function () {
      this.message ++
    }
  }
})
