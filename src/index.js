import "./styles/styles.scss";

import ctrl from "./controllers/builderCtrl.js";
ctrl.render();

// import "./clicker.js";

import Vue from "vue/dist/vue.min.js";

//import todo from "./components/todo.vue";

//import clicker from "./components/clicker.vue";

import pugTest from "./components/pugTest.vue";

new Vue ({
  el: "#application",
  template: `<div>
              <pug-test>
            </div>`,
  components: {
    // todo: todo,
    pugTest
  }
})

