<template>
  <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 py-4">
    <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
      <div class="text-xl font-serif font-bold tracking-widest">
        The Culinary Heaven Group
      </div>
      <div class="hidden md:flex space-x-8 text-sm font-semibold tracking-wider uppercase text-gray-600">
        <a href="#specialties" class="hover:text-gold transition">Specialties</a>
        <router-link to="/reservation" class="hover:text-gold transition">Reservations</router-link>
        <a href="#opening" class="hover:text-gold transition">Opening</a>
        <a href="#contact" class="hover:text-gold transition">Contact</a>
        <router-link to="/menu" class="hover:text-gold transition">Menu</router-link>
         <router-link to="/admin" class="text-xs border border-gray-300 px-3 py-1 rounded hover:bg-black hover:text-white hover:border-black transition ml-4">
          Admin
        </router-link>
      </div>
    </div>
  </nav>
</template>