import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";

const app = createApp(App);

const store = createStore({
  state: {
    isStarted: false,
  },
  mutations: {
    changeIsStarted(state) {
      state.isStarted = !state.isStarted;
    },
  },
  actions: {
    toggleStart(context) {
      context.commit("changeIsStarted");
    },
  },
});

app.use(router);
app.use(store);
app.mount("#app");
