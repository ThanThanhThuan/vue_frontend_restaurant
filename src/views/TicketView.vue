<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, Minus, Plus, CreditCard, Calendar, Lock } from 'lucide-vue-next'

const router = useRouter()
const step = ref('selection') // 'selection', 'payment', 'success'

// Ticket Data derived from the text file analysis
const tickets = ref([
  { id: 1, name: 'BASIC TICKET', desc: 'Basic Admission', price: 40, quantity: 0 },
  { id: 2, name: 'SPECIAL TICKET', desc: 'Admission and two drinks', price: 50, quantity: 0 },
  { id: 3, name: 'VIP TICKET', desc: 'Admission, four drinks and dinner', price: 120, quantity: 0 },
  { id: 4, name: 'HUNGRY TICKET', desc: 'Admission, two drinks and dinner', price: 200, quantity: 0 },
  { id: 5, name: 'VIP DELUXE TICKET', desc: 'Reserved soundproof VIP room', price: 310, quantity: 0 },
])

const paymentForm = ref({
  name: '',
  number: '',
  expiry: '',
  cvv: ''
})

const totalTickets = computed(() => tickets.value.reduce((acc, t) => acc + t.quantity, 0))
const totalPrice = computed(() => tickets.value.reduce((acc, t) => acc + (t.price * t.quantity), 0))

const increment = (id) => {
  const ticket = tickets.value.find(t => t.id === id)
  if (ticket) ticket.quantity++
}

const decrement = (id) => {
  const ticket = tickets.value.find(t => t.id === id)
  if (ticket && ticket.quantity > 0) ticket.quantity--
}

const proceedToPayment = () => {
  if (totalTickets.value > 0) step.value = 'payment'
}

const processPayment = () => {
  // Mock validation
  if (!paymentForm.value.name || !paymentForm.value.number) {
    alert('Please fill in card details')
    return
  }
  // Simulate processing delay
  setTimeout(() => {
    step.value = 'success'
  }, 1000)
}

const goBack = () => {
  if (step.value === 'payment') step.value = 'selection'
  else router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-[#fcfcfc] flex flex-col relative font-sans text-gray-800">
    
    <!-- Top Nav -->
    <div class="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20">
      <div class="text-xl font-serif font-bold tracking-widest text-black/80">
        The Culinary Heaven Group
      </div>
    </div>

    <!-- Header / Back -->
    <div class="pt-24 px-6 md:px-12 max-w-6xl mx-auto w-full z-10">
      <button @click="goBack" class="flex items-center text-gray-500 hover:text-black transition group mb-8">
        <ArrowLeft class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        <span class="uppercase text-sm tracking-widest font-semibold">Back</span>
      </button>
    </div>

    <div class="flex-grow max-w-6xl mx-auto w-full px-6 pb-20 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
      
      <!-- Left Column: Event Info -->
      <div class="lg:col-span-4 space-y-8">
        <div>
          <h2 class="text-xs font-bold tracking-[0.2em] uppercase text-gold mb-2">Celebrate with us</h2>
          <h1 class="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
            Great<br>Opening
          </h1>
        </div>

        <div class="flex items-start space-x-6 border-t border-gray-200 pt-8">
          <div>
            <div class="text-4xl font-serif text-gold font-bold">9</div>
            <div class="text-sm uppercase tracking-wider font-bold">Dec</div>
          </div>
          <div class="h-12 w-px bg-gray-300"></div>
          <div>
            <div class="text-4xl font-serif text-gold font-bold">19<span class="text-lg text-gray-400 font-sans ml-1">PM</span></div>
            <div class="text-sm uppercase tracking-wider font-bold">Start</div>
          </div>
          <div class="h-12 w-px bg-gray-300"></div>
           <div>
            <div class="text-4xl font-serif text-gold font-bold">3<span class="text-lg text-gray-400 font-sans ml-1">AM</span></div>
            <div class="text-sm uppercase tracking-wider font-bold">End</div>
          </div>
        </div>

        <div class="bg-white p-6 shadow-lg border-l-4 border-gold">
          <p class="text-sm uppercase tracking-widest text-gray-500 mb-1">Event Location</p>
          <p class="font-bold text-lg">Main Hall, Culinary Heaven</p>
          <p class="text-gray-600 text-sm mt-2">Opening celebration all week. Come join the City Blues Band live concert.</p>
        </div>
      </div>

      <!-- Right Column: Interactive Area -->
      <div class="lg:col-span-8">
        
        <!-- STEP 1: Ticket Selection -->
        <div v-if="step === 'selection'" class="bg-white shadow-xl rounded-sm border border-gray-100 p-8 animate-fade-in">
          <div class="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
            <h3 class="text-2xl font-serif">Select Tickets</h3>
            <span class="text-xs uppercase tracking-widest text-gray-400">Monday 9, 2023</span>
          </div>

          <div class="space-y-4">
            <div v-for="ticket in tickets" :key="ticket.id" 
                 class="flex flex-col sm:flex-row justify-between items-center p-4 border border-gray-100 hover:border-gold/30 hover:bg-gray-50 transition rounded-sm">
              
              <div class="text-center sm:text-left mb-4 sm:mb-0 flex-grow">
                <h4 class="font-bold text-sm tracking-wide">{{ ticket.name }}</h4>
                <p class="text-xs text-gray-500 uppercase tracking-wider mt-1">{{ ticket.desc }}</p>
              </div>

              <div class="flex items-center space-x-6">
                <span class="font-serif text-xl w-16 text-right">${{ ticket.price }}</span>
                
                <div class="flex items-center border border-gray-300 rounded">
                  <button @click="decrement(ticket.id)" class="p-2 hover:bg-gray-100 text-gray-600"><Minus class="w-4 h-4" /></button>
                  <span class="w-8 text-center font-bold">{{ ticket.quantity }}</span>
                  <button @click="increment(ticket.id)" class="p-2 hover:bg-gray-100 text-gray-600"><Plus class="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-10 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-6">
            <div class="text-center sm:text-left mb-4 sm:mb-0">
              <p class="text-xs uppercase tracking-widest text-gray-500">Total Price</p>
              <p class="text-3xl font-serif text-gold">${{ totalPrice }}</p>
            </div>
            <button 
              @click="proceedToPayment"
              class="bg-black text-white px-10 py-4 uppercase text-xs tracking-[0.2em] hover:bg-gold transition disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="totalTickets === 0"
            >
              Buy Tickets
            </button>
          </div>
        </div>

        <!-- STEP 2: Payment -->
        <div v-if="step === 'payment'" class="bg-white shadow-xl rounded-sm border border-gray-100 p-8 animate-fade-in">
          <div class="mb-8">
            <h3 class="text-2xl font-serif mb-2">Payment Details</h3>
            <p class="text-sm text-gray-500">Secure transaction for {{ totalTickets }} tickets (${{ totalPrice }})</p>
          </div>

          <form @submit.prevent="processPayment" class="space-y-6">
            <div>
              <label class="block text-xs uppercase font-bold text-gray-500 mb-2">Name on Card</label>
              <div class="relative">
                <input v-model="paymentForm.name" type="text" class="w-full border-b border-gray-300 py-3 pl-2 focus:outline-none focus:border-gold bg-transparent placeholder-gray-300 transition" placeholder="JANE DOE" required />
              </div>
            </div>

            <div>
              <label class="block text-xs uppercase font-bold text-gray-500 mb-2">Card Number</label>
              <div class="relative">
                <CreditCard class="absolute top-3 left-0 w-5 h-5 text-gray-400" />
                <input v-model="paymentForm.number" type="text" class="w-full border-b border-gray-300 py-3 pl-8 focus:outline-none focus:border-gold bg-transparent placeholder-gray-300 transition" placeholder="0000 0000 0000 0000" required />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-8">
              <div>
                <label class="block text-xs uppercase font-bold text-gray-500 mb-2">Expiration</label>
                <div class="relative">
                  <Calendar class="absolute top-3 left-0 w-5 h-5 text-gray-400" />
                  <input v-model="paymentForm.expiry" type="text" class="w-full border-b border-gray-300 py-3 pl-8 focus:outline-none focus:border-gold bg-transparent placeholder-gray-300 transition" placeholder="MM/YY" required />
                </div>
              </div>
              <div>
                <label class="block text-xs uppercase font-bold text-gray-500 mb-2">CVV</label>
                <div class="relative">
                  <Lock class="absolute top-3 left-0 w-5 h-5 text-gray-400" />
                  <input v-model="paymentForm.cvv" type="text" class="w-full border-b border-gray-300 py-3 pl-8 focus:outline-none focus:border-gold bg-transparent placeholder-gray-300 transition" placeholder="123" required />
                </div>
              </div>
            </div>

            <div class="pt-6">
              <button type="submit" class="w-full bg-black text-white py-4 uppercase text-xs tracking-[0.2em] hover:bg-gold transition flex justify-center items-center">
                <span>Continue and Confirm</span>
              </button>
            </div>
          </form>
        </div>

        <!-- STEP 3: Success -->
        <div v-if="step === 'success'" class="bg-white shadow-xl rounded-sm border border-gray-100 p-12 text-center animate-fade-in flex flex-col items-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          
          <h3 class="text-3xl font-serif mb-2">Purchase Successful</h3>
          <p class="text-gray-500 mb-8">Reservation Number: <span class="text-black font-bold">012257</span></p>

          <!-- Ticket Mockup -->
          <div class="flex w-full max-w-lg border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-10">
            <div class="bg-gold p-6 flex items-center justify-center text-white">
              <div class="text-center">
                <span class="block text-2xl font-bold">9</span>
                <span class="text-xs uppercase">Dec</span>
              </div>
            </div>
            <div class="p-6 text-left flex-grow bg-gray-50">
              <h4 class="font-bold text-lg mb-1">Great Opening</h4>
              <p class="text-xs uppercase text-gray-500 mb-4">Monday, December 9, 2023</p>
              <div class="flex justify-between items-center text-sm border-t border-gray-200 pt-3">
                <span>{{ totalTickets }} Tickets</span>
                <span class="font-bold">${{ totalPrice }}</span>
              </div>
            </div>
          </div>

          <button @click="router.push('/')" class="text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-transparent hover:border-gold pb-1 transition">
            Back to Home
          </button>
        </div>

      </div>
    </div>

    <!-- Decoration Background -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-gray-100/50 -z-10 hidden lg:block" style="clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);"></div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>