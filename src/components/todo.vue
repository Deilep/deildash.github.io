Vue.component('todo', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app2 = new Vue({
  el: '#app2',
  data: {
    groceryList: [
      { id: 0, text: 'Овощи' },
      { id: 1, text: 'Сыр' },
      { id: 2, text: 'Что там ещё люди едят?' }
    ]
  }
})


// <template>
//   <div id="application">
//     <h1>My Todo App!</h1>
//     <todo/>
//   </div>
// </template>

// <script>
// import todo from './components/todo.vue';

// export default {
//   components: {
//     todo
//   }
// }
// </script>