import { createApp } from 'vue';  // Import from Vue 3
import App from './App.vue';
import router from './router';

const app = createApp(App);  // Create app instance
app.use(router);             // Use router
app.mount('#app');           // Mount to DOM
