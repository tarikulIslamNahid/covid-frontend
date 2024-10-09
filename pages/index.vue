

<template>
   <!-- This is an example component -->
   <div class="bg-indigo-900 md:overflow-hidden">
     <div class="px-4 py-20 md:py-4">
       <div class="md:max-w-6xl md:mx-auto">
         <div class="md:flex md:flex-wrap">
           <div class="md:w-1/2 text-center md:text-left md:pt-16">
             <h2
               class="font-bold text-white text-3xl md:text-5xl leading-tight mb-4"
             >
             কোভিড-১৯ করোনা ভ্যাকসিন গ্রহণের প্রক্রিয়া
             </h2>

             <p class="text-indigo-200 md:text-xl md:pr-36">
               মুঠোফোনে খুদেবার্তা প্রাপ্তি সাপেক্ষে টিকাকার্ড জাতীয় পরিচয়পত্র ও সম্মতিপত্রসহ নির্দিষ্ট তারিখে টিকাদান কেন্দ্রে স্ব-শরীরে উপস্থিত হয়ে কোভিড-১৯ টিকা গ্রহণ করবেন।
             </p>

             <nuxt-link
               to="/registration"
               class="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow"
               >নিবন্ধন</nuxt-link
             >
           </div>
           <div class="md:w-1/2 relative">
             <div class="hidden md:block">
               <div
                 class="-ml-24 -mb-40 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                 style="transform: rotate(-8deg);"
               >
                 <div
                   class="mx-auto px-2 pb-2 relative mb-8"
                 >
                   <img src="@/assets/images/card.png" alt="">
                 </div>

                 <div class="text-gray-800 text-center">
                  টিকা কার্ড সংগ্রহ
                 </div>
               </div>

               <div
                 class="ml-24 mb-16 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                 style="transform: rotate(-8deg); z-index: 2;"
               >
                 <div
                   class="mx-auto rounded-lg relative mb-8 py-2 w-20 border-2 border-white"
                 >
                 <img src="@/assets/images/check.png" alt="">
                 </div>

                 <div class="text-gray-800 text-center">
                  নিবন্ধন স্ট্যাটাস
                 </div>
               </div>

               <div
                 class="ml-32 absolute left-0 bottom-0 w-48 bg-white rounded-lg shadow-lg px-10 py-8"
                 style="transform: rotate(-8deg); z-index: 2; margin-bottom: -220px;"
               >
                 <div
                   class="mx-auto rounded-lg relative mb-8 py-2 w-20 border-2 border-white"
                 >
                 <img src="@/assets/images/sonod.png" alt="">
                 </div>

                 <div class="text-gray-800 text-center">
                  টিকা কার্ড সংগ্রহ
                 </div>
               </div>
               <div
               class="ml-96 -mb-20 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
               style="transform: rotate(-8deg);"
             >
               <div
                 class="mx-auto rounded-lg px-2 pb-2 relative mb-8"
               >
                 <img src="@/assets/images/qus.png" alt="">
                  
               </div>

               <div class="text-gray-800 text-center">
                  সচরাচর জিজ্ঞাসা
               </div>
             </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <svg
       class="fill-current text-white hidden md:block"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 1440 320"
     >
       <path fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
     </svg>
    
</div>
</template>

<style>
/* Add any custom styles here */
</style>