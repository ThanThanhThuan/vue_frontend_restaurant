<script setup>
import { useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'

const router = useRouter()

const goBack = () => {
  router.push('/')
}

const appetizers = [
  { name: 'Truffle-infused Arancini', desc: 'Creamy risotto balls with a hint of truffle, served with a saffron aioli.', price: '21,00' },
  { name: 'Seared Scallops with Citrus Glaze', desc: 'Perfectly seared scallops drizzled with a tangy citrus reduction, accompanied by microgreens.', price: '25,00' },
  { name: 'Herbed Goat Cheese Crostini', desc: 'Baguette slices topped with whipped herbed goat cheese, heirloom tomatoes, and a balsamic reduction.', price: '35,00' }
]

const soups = [
  { name: 'Lobster Bisque', desc: 'Rich and velvety lobster bisque with a touch of Cognac, garnished with chive oil.', price: '18,00' },
  { name: 'Wild Mushroom Consommé', desc: 'Clear broth infused with a medley of wild mushrooms, served with delicate herb dumplings.', price: '24,00' },
  { name: 'Roasted Butternut Squash Soup', desc: 'Creamy butternut squash soup accented with roasted apples, toasted pumpkin seeds, and a drizzle of maple.', price: '42,00' }
]

const specialties = [
  { name: 'Sous Vide Filet Mignon', desc: 'Beef filet cooked using sous vide technique, accompanied by truffle mashed potatoes.', price: '54,00' },
  { name: 'Pan-Seared Chilean Sea Bass', desc: 'Chilean sea bass seared, with saffron-infused sauce.', price: '61,00' },
  { name: 'Vegetarian Truffle Risotto', desc: 'Arborio rice cooked creamy with a blend of wild mushrooms and truffle oil.', price: '70,00' }
]

const desserts = [
  { name: 'Decadent Chocolate Fondant', desc: 'A molten chocolate cake served with vanilla bean ice cream and raspberry coulis.', price: '10,00' },
  { name: 'Lemon Lavender Panna Cotta', desc: 'Silky panna cotta infused with lemon and lavender, garnished with candied lemon peel.', price: '12,50' },
  { name: 'Hazelnut Praline Tiramisu', desc: 'Layers of espresso-soaked ladyfingers and hazelnut praline cream.', price: '14,00' },
  { name: 'Hazelnut Praline Mousse Cake', desc: 'Layers of hazelnut praline mousse, finished with chocolate glaze and candied hazelnuts.', price: '10,00' },
  { name: 'Lemon Lavender Soufflé', desc: 'Delicate and airy lemon lavender soufflé, served with a raspberry coulis.', price: '18,00' },
  { name: 'Passion Fruit Mango Sorbet', desc: 'A refreshing sorbet duo of passion fruit and mango, served in a crisp tuile bowl.', price: '15,50' }
]
</script>

<template>
  <div class="min-h-screen bg-[#fcfcfc] flex flex-col relative font-sans text-gray-800 pb-20">
    
    <!-- Background Decor (Circles from template) -->
    <div class="absolute top-0 right-0 p-10 opacity-10 hidden lg:block">
       <div class="grid grid-cols-4 gap-4">
          <div v-for="n in 32" :key="n" class="w-2 h-2 bg-black rounded-full"></div>
       </div>
    </div>

    <!-- Header Section -->
    <header class="relative pt-12 px-6 md:px-12 max-w-7xl mx-auto w-full mb-16">
      
      <!-- Back Button -->
      <button @click="goBack" class="flex items-center text-gray-500 hover:text-black transition group mb-12">
        <ArrowLeft class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        <span class="uppercase text-sm tracking-widest font-semibold">Back</span>
      </button>

      <!-- Title Area -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-4 relative">
           <!-- Decorative Abstract Shape -->
           <div class="absolute -top-10 -left-10 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
           <h1 class="relative text-6xl md:text-8xl font-serif font-bold text-gray-900 leading-none">
             Gourmet<br>
             <span class="text-gold">Gastro Bar</span>
           </h1>
        </div>
        
        <div class="lg:col-span-8 flex flex-col justify-center lg:pl-12 pt-4">
           <div class="flex items-center space-x-4 mb-4">
             <div class="h-px bg-gray-300 w-16"></div>
             <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Delicatessen Specialists</p>
             <div class="h-px bg-gray-300 w-16"></div>
             <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Music & Events</p>
           </div>
           <div class="text-gray-600 text-sm space-y-1">
             <p>Blue Street, 245 - Acme City • Happy Country</p>
             <p>+210 0002 0036 89 • +210 0002 0036 97</p>
             <div class="flex space-x-4 pt-2">
               <span>IG: @theculinaryheavenmusicbar</span>
               <span>X: @theculinaryheavenbar</span>
             </div>
           </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto w-full px-6 md:px-12 space-y-24">
      
      <!-- Section: Appetizers -->
      <section>
        <div class="flex items-center mb-12">
          <h2 class="text-4xl font-serif mr-6">Appetizers</h2>
          <div class="h-px bg-gray-300 flex-grow"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          <div v-for="item in appetizers" :key="item.name" class="group">
            <div class="flex justify-between items-baseline mb-2">
              <h3 class="font-bold text-lg group-hover:text-gold transition">{{ item.name }}</h3>
              <span class="font-serif text-xl ml-4">{{ item.price }}</span>
            </div>
            <p class="text-gray-500 text-sm leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Section: Soups & Broths (With Highlight Box from design) -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-8">
           <div class="flex items-center mb-12">
            <h2 class="text-4xl font-serif mr-6">Soups and broths</h2>
            <div class="h-px bg-gray-300 flex-grow"></div>
          </div>
          
          <div class="space-y-12">
            <div v-for="item in soups" :key="item.name" class="group border-b border-gray-100 pb-8 last:border-0">
              <div class="flex justify-between items-baseline mb-2">
                <h3 class="font-bold text-lg group-hover:text-gold transition">{{ item.name }}</h3>
                <span class="font-serif text-xl">{{ item.price }}</span>
              </div>
              <p class="text-gray-500 text-sm leading-relaxed max-w-2xl">{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Specialties Highlight Box (Right Column) -->
        <div class="lg:col-span-4 relative mt-12 lg:mt-0">
          <div class="absolute inset-0 border-2 border-gray-200 transform translate-x-4 translate-y-4"></div>
          <div class="relative bg-white border border-gray-200 p-8 shadow-sm h-full">
            <h3 class="text-2xl font-serif mb-8 text-center text-gold">Specialties</h3>
            
            <div class="space-y-10">
              <div v-for="item in specialties" :key="item.name">
                <div class="flex justify-between items-baseline mb-1">
                  <h4 class="font-bold text-sm uppercase tracking-wide">{{ item.name }}</h4>
                  <span class="font-serif text-lg">{{ item.price }}</span>
                </div>
                <p class="text-xs text-gray-500 leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
            
            <!-- Dots decoration at bottom -->
            <div class="mt-8 flex justify-center space-x-2 opacity-30">
               <div v-for="n in 6" :key="n" class="w-1 h-1 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section: Desserts -->
      <section>
        <div class="flex items-center mb-12">
          <div class="h-px bg-gray-300 flex-grow mr-6"></div>
          <h2 class="text-4xl font-serif">Desserts</h2>
          <div class="h-px bg-gray-300 flex-grow ml-6"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          <div v-for="item in desserts" :key="item.name" class="group">
            <div class="flex justify-between items-baseline mb-2">
              <h3 class="font-bold text-lg group-hover:text-gold transition">{{ item.name }}</h3>
              <span class="font-serif text-xl ml-4">{{ item.price }}</span>
            </div>
            <p class="text-gray-500 text-sm leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer Decoration -->
    <div class="mt-20 text-center">
      <p class="font-handwriting text-3xl text-gold transform -rotate-3 inline-block">The Kings of Desserts</p>
    </div>

  </div>
</template>

<style scoped>
.font-handwriting {
  font-family: 'Brush Script MT', cursive;
}
</style>