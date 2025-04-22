<template>
    <div>
      <h1>Status Logs for {{ deviceId }}</h1>
      <ul>
        <li v-for="log in logs" :key="log.id">
          {{ log.created_at }} - {{ JSON.stringify(log.payload) }}
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import api from '../api';
  
  export default defineComponent({
    setup() {
      const route = useRoute();
      const deviceId = route.params.deviceId as string;
      const logs = ref([]);
  
      const fetchLogs = async () => {
        const response = await api.get(`/devices/${deviceId}/status_logs`);
        logs.value = response.data;
      };
  
      onMounted(fetchLogs);
  
      return { deviceId, logs };
    }
  });
  </script>
  