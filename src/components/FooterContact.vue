<template>
  <footer id="contact" class="bg-white pt-20 pb-10 border-t border-gray-200">
    <div class="max-w-4xl mx-auto px-6">
      
      <div class="text-center mb-12">
        <h2 class="text-4xl font-serif mb-4">Contact</h2>
        <p class="text-gray-500 uppercase tracking-widest text-sm">Leave us a message, we will be happy to respond</p>
      </div>

      <form class="space-y-6 mb-16">
        <div class="flex flex-col">
          <label class="text-xs uppercase font-bold mb-2">Email</label>
          <input type="email" class="border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition bg-transparent" placeholder="your@email.com" />
        </div>
        <div class="flex flex-col">
          <label class="text-xs uppercase font-bold mb-2">Message</label>
          <textarea rows="4" class="border border-gray-300 p-2 focus:outline-none focus:border-gold transition bg-transparent"></textarea>
        </div>
        <div class="text-center">
          <button class="bg-black text-white px-12 py-3 uppercase text-xs tracking-widest hover:bg-gold transition">
            Send
          </button>
        </div>
      </form>

      <div class="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-wider space-y-4 md:space-y-0">
        <div class="text-center md:text-left">
          <p>Blue Street, 245 - Acme City</p>
          <p>Happy Country</p>
        </div>
        <div class="flex space-x-6">
          <a href="#" class="hover:text-black">Terms and Conditions</a>
          <a href="#" class="hover:text-black">Privacy Policy</a>
          <a href="#" class="hover:text-black">Cookies Policy</a>
        </div>
      </div>
      
      <div class="mt-8 text-center">
        <p class="font-serif italic text-gold text-lg">The Culinary Heaven Group</p>
      </div>
    </div>
  </footer>
</template>