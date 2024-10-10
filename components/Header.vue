<template>
    <div class="bg-[#f8f9fa] px-4 py-4">
        <div
          class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
        >
          <div class="flex justify-between items-center">
            <nuxt-link to="/" class="inline-block py-2 text-white text-xl font-bold"
              >
              <img src="@/assets/images/logo.png" alt="" width="140px" >
          </nuxt-link>
           
          </div>
          
          <div>
            <div class="block">
              <nuxt-link
                to="/"
                class="inline-block py-1 md:py-4 text-slate-800 mr-6 font-bold"
                >হোম</nuxt-link>
              <nuxt-link
                to="/registration"
                class="inline-block py-1 md:py-4 text-gray-500 hover:text-slate-800 mr-6"
                >নিবন্ধন</nuxt-link>
              <nuxt-link
                to="/search"
                class="inline-block py-1 md:py-4 text-gray-500 hover:text-slate-800"
                >টিকা সনদ যাচাই</nuxt-link>
            </div>
          </div>
          
        </div>
      </div>
</template>