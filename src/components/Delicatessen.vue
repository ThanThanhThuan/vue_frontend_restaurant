<template>
  <section id="reservations" class="relative py-24 bg-dark text-white">
    <div class="absolute inset-0 bg-black/60 z-10"></div>
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');"></div>
    
    <div class="relative z-20 max-w-4xl mx-auto text-center px-6">
      <h2 class="text-5xl font-serif mb-6">Delicatessen</h2>
      <p class="text-xl italic mb-10 font-light">From the sea to your palate</p>
      
       <router-link to="/reservation" class="inline-block border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition duration-300 uppercase tracking-widest text-sm font-bold">
        Reserve a Table
      </router-link>
    </div>
  </section>
</template>