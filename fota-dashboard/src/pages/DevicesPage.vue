<template>
    <div class="container">
      <h1>Devices</h1>
  
      <table>
        <thead>
          <tr>
            <th>Device ID</th>
            <th>Device Type</th>
            <th>Name</th>
            <th>Firmware Version</th>
            <th>IP Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="device in devices" :key="device.device_id">
            <td>{{ device.device_id }}</td>
            <td>{{ device.device_type }}</td>
            <td>{{ device.name }}</td>
            <td>{{ device.firmware_version }}</td>
            <td>{{ device.ip }}</td>
            <td>
              <router-link :to="`/devices/${device.device_id}/status_logs`">View Status Logs</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import api from '../api';
  
  interface Device {
    device_id: string;
    device_type: string;
    name: string;
    firmware_version: string;
    last_seen: string;
    ip: string;
    id: string;
  }
  
  export default defineComponent({
    setup() {
      const devices = ref<Device[]>([]);
  
      const fetchDevices = async () => {
        try {
          const response = await api.get('/devices');
          console.log('📦 API Response:', response.data);
          devices.value = response.data.data; // ✅ lấy đúng mảng devices
        } catch (error) {
          console.error('❌ Error fetching devices:', error);
        }
      };
  
      onMounted(fetchDevices);
  
      return { devices };
    }
  });
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  thead {
    background-color: #f5f5f5;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px 12px;
    text-align: left;
  }
  
  th {
    font-weight: bold;
  }
  
  tr:hover {
    background-color: #f1f1f1;
  }
  
  h1 {
    margin-bottom: 10px;
  }
  </style>
  