<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { ArrowLeft, Users, Calendar, Clock, RefreshCw } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
const reservations = ref([])
const isLoading = ref(true)
const error = ref(null)
const API_URL = import.meta.env.VITE_API_URL

const fetchReservations = async () => {
  isLoading.value = true
  error.value = null
  try {
    const response = await axios.get(API_URL + '/reservations')
    reservations.value = response.data
  } catch (err) {
    error.value = 'Failed to load reservations. Is the backend running?'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

const formatDate = (dateString) => {
  // Handles formatting of the ISO timestamp created by Mongoose
  return new Date(dateString).toLocaleString()
}

onMounted(() => {
  fetchReservations()
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans text-gray-800">
    
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <button @click="router.push('/')" class="p-2 hover:bg-gray-100 rounded-full transition">
            <ArrowLeft class="w-5 h-5 text-gray-600" />
          </button>
          <h1 class="text-xl font-bold uppercase tracking-wider text-gray-900">THAN THANH THUAN - Admin Dashboard</h1>
        </div>
        <button 
          @click="fetchReservations" 
          class="flex items-center space-x-2 text-sm font-semibold text-gold hover:text-black transition"
        >
          <RefreshCw class="w-4 h-4" :class="{ 'animate-spin': isLoading }" />
          <span>Refresh</span>
        </button>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <!-- Stats Overview -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center space-x-4">
          <div class="p-3 bg-blue-50 rounded-full text-blue-600"><Users class="w-6 h-6" /></div>
          <div>
            <p class="text-xs text-gray-500 uppercase font-bold">Total Reservations</p>
            <p class="text-2xl font-bold">{{ reservations.length }}</p>
          </div>
        </div>
      </div>

      <!-- Table Section -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        
        <div v-if="isLoading" class="p-12 text-center text-gray-500">
          Loading data...
        </div>

        <div v-else-if="error" class="p-12 text-center text-red-500">
          {{ error }}
        </div>

        <div v-else-if="reservations.length === 0" class="p-12 text-center text-gray-500">
          No reservations found.
        </div>

        <div v-else class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Created At</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Time</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Guests</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="res in reservations" :key="res._id" class="hover:bg-gray-50 transition">
                <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-400">
                  {{ formatDate(res.createdAt) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center text-sm font-medium text-gray-900">
                    <Calendar class="w-4 h-4 mr-2 text-gold" />
                    {{ res.date }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center text-sm text-gray-500">
                    <Clock class="w-4 h-4 mr-2 text-gray-400" />
                    {{ res.time }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center text-sm text-gray-900">
                    <Users class="w-4 h-4 mr-2 text-gray-400" />
                    {{ res.people }} People
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 uppercase tracking-wide">
                    {{ res.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>