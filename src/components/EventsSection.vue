<template>
  <section id="opening" class="py-20 bg-gray-50 relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Date Column -->
        <div class="flex flex-col justify-center items-center lg:items-start border-r border-gray-300 pr-8">
          <p class="uppercase tracking-widest text-sm mb-2">Save the Date</p>
          <div class="text-8xl font-serif font-bold text-gold">9</div>
          <p class="text-xl uppercase mb-8">December</p>
          
          <p class="uppercase tracking-widest text-sm mb-2">Starts At</p>
          <div class="text-8xl font-serif font-bold text-gold">19</div>
          <p class="text-xl uppercase">Hours</p>
        </div>

        <!-- Main Event Info -->
        <div class="col-span-2 space-y-8">
          <h2 class="text-6xl font-serif">Grand Opening</h2>
          <div class="w-full h-0.5 bg-black my-6"></div>
          
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 class="text-2xl font-bold mb-2">Free appetizer and champagne</h3>
              <p class="text-gray-600">With live concert by <span class="font-bold text-black">The City Blues Band</span></p>
              <p class="text-gray-500 text-sm mt-1">Show, raffle and late disco</p>
            </div>
            <div class="mt-6 md:mt-0 text-right">
              <p class="text-sm font-bold uppercase mb-1">Celebrate with us</p>
               <router-link to="/tickets" class="inline-block bg-black text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-gold transition">
    Get your ticket
  </router-link>
            </div>
          </div>

          <!-- Pricing -->
          <div class="grid grid-cols-2 gap-4 bg-white p-6 shadow-md mt-8 max-w-md">
            <div>
              <p class="text-xs uppercase text-gray-500">Early Reservation</p>
              <p class="text-3xl font-serif">$90</p>
            </div>
            <div>
              <p class="text-xs uppercase text-gray-500">Box Office Price</p>
              <p class="text-3xl font-serif">$140</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Dots Decoration (Bottom) -->
      <div class="flex justify-center mt-16 space-x-4 opacity-30">
        <div v-for="n in 12" :key="n" class="w-1 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  </section>
</template>