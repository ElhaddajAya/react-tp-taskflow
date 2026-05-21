import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Enregistrer Pinia et Router — sans ça, RouterLink et RouterView ne fonctionnent pas
app.use(createPinia());
app.use(router);

app.mount("#app");
