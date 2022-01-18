import '../style.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import FontAwesomeIcon from "./utilities/fontawesome-icon";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");