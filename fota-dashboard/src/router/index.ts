import { createRouter, createWebHistory } from 'vue-router';
import DevicesPage from '../pages/DevicesPage.vue';
import StatusLogsPage from '../pages/StatusLogsPage.vue';

const routes = [
  { path: '/', redirect: '/devices' },
  { path: '/devices', component: DevicesPage },
  { path: '/devices/:deviceId/status_logs', component: StatusLogsPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
