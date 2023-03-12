import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/app.scss";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// fontawesome icons with vuetify
import { aliases, fa } from "vuetify/iconsets/fa-svg";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./fontawesome";

const vuetify = createVuetify({
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
  components,
  directives,
});

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(vuetify);

app.mount("#app");
