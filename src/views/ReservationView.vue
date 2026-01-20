<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, ChevronLeft, ChevronRight, Loader2, User, Calendar as CalendarIcon, Clock } from 'lucide-vue-next'
import axios from 'axios'

const router = useRouter()
const currentStep = ref(1)
const isSubmitting = ref(false)
const API_URL = import.meta.env.VITE_API_URL

// --- Date Logic Setup ---
const today = new Date()
const currentMonth = ref(today.getMonth())
const currentYear = ref(today.getFullYear())

// --- Selection State ---
const selectedPeople = ref(2) // Default to 2 guests
const selectedDay = ref(today.getDate()) // Default to Today
const selectedTime = ref(null)

// Step 1: People Data
const peopleOptions = Array.from({ length: 20 }, (_, i) => i + 1)

// Step 2: Dynamic Calendar Data
const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

// Computed: Month Name (e.g., "January 2026")
const currentMonthName = computed(() => {
  return new Date(currentYear.value, currentMonth.value).toLocaleString('default', { month: 'long', year: 'numeric' })
})

// Computed: Days in current month
const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
})

// Computed: Padding for the first day of the month (to align grid)
const firstDayPadding = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1).getDay()
})

// Computed: Full Date String for Backend & Display
const fullDateString = computed(() => {
  if (!selectedDay.value) return 'Select Date'
  const date = new Date(currentYear.value, currentMonth.value, selectedDay.value)
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
})

// Computed: Summary Label
const selectionSummary = computed(() => {
  return {
    people: `${selectedPeople.value} Guest${selectedPeople.value > 1 ? 's' : ''}`,
    date: fullDateString.value,
    time: selectedTime.value || '--:--'
  }
})

// Navigation Methods
const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
  selectedDay.value = null // Reset selection on month change
}

const prevMonth = () => {
  // Optional: Prevent going before today's month
  if (currentYear.value === today.getFullYear() && currentMonth.value === today.getMonth()) return

  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
  selectedDay.value = null
}

const selectDate = (day) => {
  selectedDay.value = day
  setTimeout(() => currentStep.value = 3, 200)
}

// Step 3: Time Data
const timeSlots = [
  '12:30', '12:45', '13:00', '13:15', '13:30',
  '14:30', '14:45', '15:00', '15:15', '15:30', '15:45',
  '18:00', '18:30', '18:45', '19:00', '19:15', '19:30', '19:45', '20:00', '20:15', '20:30', '20:45', '21:00'
]

const selectPeople = (num) => {
  selectedPeople.value = num
  setTimeout(() => currentStep.value = 2, 200)
}

const selectTime = (time) => {
  selectedTime.value = time
}

const goBack = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  } else {
    router.push('/')
  }
}

const submitReservation = async () => {
  if(!selectedTime.value) return alert('Please select a time')
  
  isSubmitting.value = true

  const reservationData = {
    people: selectedPeople.value,
    date: fullDateString.value,
    time: selectedTime.value
  }

  try {
    // const response = await axios.post('http://localhost:5000/api/reservations', reservationData)
    const response = await axios.post(API_URL + '/reservations', reservationData)

    if (response.data.success) {
      alert(`Reservation Confirmed!\n\n${selectionSummary.value.people}\n${selectionSummary.value.date}\n${selectionSummary.value.time}`)
      router.push('/')
    }
  } catch (error) {
    console.error(error)
    alert('Failed to make reservation. Is the backend server running?')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#fcfcfc] flex flex-col relative overflow-hidden">
    
    <!-- Background Shapes -->
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
    <div class="absolute bottom-40 right-0 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/3"></div>

    <header class="pt-8 px-6 flex justify-center items-center relative z-10">
      <div class="text-2xl font-serif font-bold tracking-widest text-center">
        The Culinary Heaven Group
      </div>
    </header>

    <main class="flex-grow flex flex-col items-center justify-center px-4 py-8 relative z-10 w-full max-w-4xl mx-auto">
      
      <div class="w-full mb-4 flex justify-between items-center">
        <button @click="goBack" class="flex items-center text-gray-500 hover:text-black transition group">
          <ArrowLeft class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span class="uppercase text-sm tracking-widest font-semibold">Back</span>
        </button>
      </div>

      <h1 class="text-5xl font-serif mb-8 text-center">Reservation</h1>

      <!-- NEW: Selection Summary Label -->
      <div class="w-full bg-white border-l-4 border-gold shadow-sm rounded-r-md p-4 mb-6 flex flex-wrap justify-between items-center gap-4">
        <div class="flex items-center space-x-2">
          <User class="w-4 h-4 text-gold" />
          <span class="text-sm font-bold uppercase tracking-wider text-gray-600">Guests: <span class="text-black">{{ selectedPeople }}</span></span>
        </div>
        <div class="h-4 w-px bg-gray-200 hidden sm:block"></div>
        <div class="flex items-center space-x-2">
          <CalendarIcon class="w-4 h-4 text-gold" />
          <span class="text-sm font-bold uppercase tracking-wider text-gray-600">Date: <span class="text-black">{{ fullDateString }}</span></span>
        </div>
        <div class="h-4 w-px bg-gray-200 hidden sm:block"></div>
        <div class="flex items-center space-x-2">
          <Clock class="w-4 h-4 text-gold" />
          <span class="text-sm font-bold uppercase tracking-wider text-gray-600">Time: <span class="text-black">{{ selectedTime || '--:--' }}</span></span>
        </div>
      </div>

      <div class="w-full bg-white shadow-xl rounded-sm border border-gray-100 p-8 min-h-[500px] flex flex-col">
        
        <!-- Progress Bar -->
        <div class="flex justify-center space-x-2 mb-8">
           <div class="h-1 w-16 transition-all duration-300" :class="currentStep >= 1 ? 'bg-gold' : 'bg-gray-200'"></div>
           <div class="h-1 w-16 transition-all duration-300" :class="currentStep >= 2 ? 'bg-gold' : 'bg-gray-200'"></div>
           <div class="h-1 w-16 transition-all duration-300" :class="currentStep >= 3 ? 'bg-gold' : 'bg-gray-200'"></div>
        </div>

        <!-- Step 1: Number of People -->
        <div v-if="currentStep === 1" class="flex-grow animate-fade-in">
          <h2 class="text-center text-xl uppercase tracking-widest mb-10 text-gray-600">Number of people</h2>
          <div class="grid grid-cols-4 md:grid-cols-5 gap-4">
            <button 
              v-for="num in peopleOptions" :key="num" @click="selectPeople(num)"
              class="h-12 border border-gray-200 hover:border-gold hover:text-gold hover:bg-gold/5 transition flex items-center justify-center font-serif text-lg"
              :class="{'bg-gold text-white border-gold': selectedPeople === num}"
            >{{ num }}</button>
          </div>
        </div>

        <!-- Step 2: Dynamic Calendar -->
        <div v-if="currentStep === 2" class="flex-grow animate-fade-in">
          <h2 class="text-center text-xl uppercase tracking-widest mb-6 text-gray-600">For what date?</h2>
          
          <div class="flex justify-between items-center mb-6 px-4">
            <button @click="prevMonth" class="text-gray-400 hover:text-black transition">
              <ChevronLeft />
            </button>
            <span class="font-serif text-2xl w-48 text-center">{{ currentMonthName }}</span>
            <button @click="nextMonth" class="text-gray-400 hover:text-black transition">
              <ChevronRight />
            </button>
          </div>

          <div class="grid grid-cols-7 gap-2 text-center mb-2">
            <div v-for="day in weekDays" :key="day" class="text-xs font-bold text-gray-400">{{ day }}</div>
          </div>
          
          <div class="grid grid-cols-7 gap-2">
            <!-- Padding for start of month -->
            <div v-for="n in firstDayPadding" :key="`empty-${n}`"></div>
            
            <!-- Days -->
            <button 
              v-for="day in daysInMonth" 
              :key="day" 
              @click="selectDate(day)"
              class="h-10 w-10 mx-auto flex items-center justify-center rounded-full hover:bg-gray-100 transition font-serif"
              :class="{
                'bg-gold text-white hover:bg-gold': selectedDay === day,
                'text-gray-300 cursor-not-allowed hover:bg-transparent': 
                  // Disable past days in current month
                  (currentMonth === today.getMonth() && currentYear === today.getFullYear() && day < today.getDate())
              }"
              :disabled="(currentMonth === today.getMonth() && currentYear === today.getFullYear() && day < today.getDate())"
            >
              {{ day }}
            </button>
          </div>
        </div>

        <!-- Step 3: Time -->
        <div v-if="currentStep === 3" class="flex-grow animate-fade-in">
          <h2 class="text-center text-xl uppercase tracking-widest mb-10 text-gray-600">At what time?</h2>
          <div class="grid grid-cols-3 md:grid-cols-4 gap-4">
            <button v-for="time in timeSlots" :key="time" @click="selectTime(time)"
              class="h-12 border border-gray-200 hover:border-gold hover:text-gold hover:bg-gold/5 transition flex items-center justify-center text-sm font-bold tracking-wider"
              :class="{'bg-gold text-white border-gold': selectedTime === time}"
            >{{ time }}</button>
          </div>
          
          <div class="mt-12 text-center">
             <button 
               @click="submitReservation"
               class="bg-black text-white px-16 py-4 uppercase tracking-[0.2em] hover:bg-gold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
               :disabled="!selectedTime || isSubmitting"
             >
               <Loader2 v-if="isSubmitting" class="w-5 h-5 mr-2 animate-spin" />
               <span v-else>Reserve a table</span>
             </button>
          </div>
        </div>

      </div>
    </main>

    <footer class="py-8 text-center text-xs text-gray-400 uppercase tracking-wider border-t border-gray-200 mt-auto">
      <div class="flex justify-center space-x-8 mb-4">
        <a href="#" class="hover:text-black">Terms</a>
        <a href="#" class="hover:text-black">Privacy</a>
        <a href="#" class="hover:text-black">Cookies</a>
      </div>
      <p>&copy; 2026 The Culinary Heaven Group</p>
    </footer>

  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}
</style>