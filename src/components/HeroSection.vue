<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden bg-gray-50">
    <!-- Abstract Background Shapes (Simulating the SVG paths) -->
    <div class="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#000" d="M45,-76C58,-69,68,-57,75,-44C82,-31,86,-17,84,-4C82,10,74,23,65,34C56,45,46,54,34,62C22,70,9,77,-5,78C-19,80,-34,75,-46,67C-58,59,-67,47,-73,34C-79,21,-82,7,-80,-6C-78,-19,-71,-31,-61,-41C-51,-51,-38,-59,-25,-63C-12,-68,2,-86,16,-86L45,-76Z" transform="translate(100 100)" />
       </svg>
    </div>

    <div class="relative z-10 text-center px-4">
      <h2 class="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-gold">The</h2>
      <h1 class="text-6xl md:text-8xl font-serif font-bold text-dark mb-6 relative">
        <span class="block transform -rotate-2">Culinary</span>
        <span class="block transform rotate-3 ml-12 text-gold">Heaven</span>
      </h1>
      <div class="mt-8 flex flex-col items-center">
        <div class="h-1 w-24 bg-black mb-4"></div>
        <p class="text-xl tracking-widest uppercase font-light">Gastro Bar</p>
        <p class="text-md text-gray-500 mt-2 tracking-wide">Delicatessen Specialists</p>
        <p class="text-sm font-handwriting transform -rotate-6 mt-6 text-gold text-2xl">The Kings of Desserts</p>
      </div>
    </div>
    
    <!-- Image Placeholder from text file -->
    <div class="absolute bottom-0 w-full h-1/3 bg-cover bg-center opacity-80" 
         style="background-image: url('https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');">
    </div>
  </section>
</template>

<style scoped>
.font-handwriting {
  font-family: 'Brush Script MT', cursive;
}
</style>