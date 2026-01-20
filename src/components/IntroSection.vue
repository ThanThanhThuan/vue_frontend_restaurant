<template>
  <section id="specialties" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <!-- Text Content -->
      <div class="space-y-8">
        <div>
          <h3 class="text-4xl font-serif mb-2">Our exclusive specialties</h3>
          <div class="h-1 w-16 bg-gold"></div>
        </div>
        
        <div class="pl-8 border-l-2 border-gray-200">
          <h4 class="text-2xl font-bold uppercase mb-2">Wine Experts</h4>
          <p class="text-gray-600 italic">"The best wine you have ever tasted"</p>
          <ul class="mt-4 space-y-2 text-sm font-semibold tracking-wide">
             <li class="flex items-center"><span class="w-2 h-2 bg-black rounded-full mr-2"></span>PAIRINGS</li>
             <li class="flex items-center"><span class="w-2 h-2 bg-black rounded-full mr-2"></span>TASTINGS</li>
             <li class="flex items-center"><span class="w-2 h-2 bg-black rounded-full mr-2"></span>WINE EVENTS</li>
          </ul>
        </div>

        <div class="pl-8 border-l-2 border-gray-200">
          <h4 class="text-2xl font-bold uppercase mb-2">Gastro Cuisine</h4>
          <p class="text-gray-600">The best gastro bar in the world.</p>
          <div class="mt-4 space-y-1">
            <p class="text-xs uppercase tracking-widest">Products KM 0</p>
            <p class="text-xs uppercase tracking-widest">Ecological & Sustainable</p>
          </div>
        </div>
      </div>

      <!-- Image/Shape Representation -->
      <div class="relative">
        <!-- Simulating the dots pattern from the text file -->
        <div class="absolute -left-10 top-0 grid grid-cols-4 gap-2 opacity-20">
             <div v-for="n in 16" :key="n" class="w-2 h-2 bg-black rounded-full"></div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Gastro Food" 
          class="shadow-2xl rounded-lg z-10 relative"
        />
        <div class="absolute -bottom-6 -right-6 bg-white p-4 shadow-xl">
           <p class="transform -rotate-90 origin-center text-xs tracking-widest uppercase">The Tasting Menu</p>
        </div>
      </div>

    </div>
  </section>
</template>