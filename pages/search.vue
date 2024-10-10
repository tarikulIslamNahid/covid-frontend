<script setup>
import  { useRuntimeConfig } from "nuxt/app";
import { useToast } from 'vue-toast-notification';
const config = useRuntimeConfig();

const toast = useToast();
const search = ref(null);
const isSubmitting = ref(false);
const type = ref(null);

const submitSearch = async () =>{
    isSubmitting.value=true
    const result = await fetch(`${config.public.API_URL}search?nid=${search.value}`, {
    method: 'GET',
    headers:{
        Accept:'application/json',
      },
  });
  const data = await result.json()
  isSubmitting.value=false
  if(data.message=="Not registered"){
    type.value='register'
  }
  if(data.message=="Scheduled"){
    type.value='scheduled'
  }
  if(data.message=="Vaccinated"){
    type.value='vaccinated'
  }
  if(data.errors && data.message!="Not registered"){
    toast.open({
        message: data.message,
        type: 'error',
        position: 'top-right', 
      });
      search.value=null
      type.value=null
  }
console.log(data,'search')
}
</script>
<template>
    <div class="w-full max-w-screen-xl mx-auto px-6">
        <div class="flex justify-center p-4 px-3 py-10">
            <div class="w-full max-w-md">
                <div class="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <div class="block text-gray-700 text-lg font-semibold py-2 px-2">
                        টিকা সনদ যাচাই
                    </div>
                    <div class="flex items-center bg-gray-200 rounded-md">
                        <div class="pl-2">
                            <svg class="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path class="heroicon-ui"
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                            </svg>
                        </div>
                        <input
                            class="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                            id="search" type="text" v-model.trim="search" placeholder="Enter NID and press Enter">
                            <button :disabled="search==null || search==''" @click.stop="submitSearch" class="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3">{{isSubmitting?'Search...':'Search'}}</button>
                    </div>
                    <div class="py-3 text-sm">
                        <nuxt-link to="/registration" v-if="type=='register'" class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span class=" bg-red-500 h-2 w-2 m-2 rounded-full"></span>
                            <div class="flex-grow font-medium px-2 underline ">Click to go Registration Page</div>
                            <div class="text-sm font-normal text-gray-500 tracking-wide">Not Registered</div>
                        </nuxt-link>
                        <div v-if="type=='scheduled'" class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span class="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                            <div class="flex-grow font-medium px-2">Your Vaccination Date is Appointed.</div>
                            <div class="text-sm font-normal text-gray-500 tracking-wide">Scheduled</div>
                        </div>
                        <div v-if="type=='vaccinated'" class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span class="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                            <div class="flex-grow font-medium px-2">You are already vaccinated</div>
                            <div class="text-sm font-normal text-gray-500 tracking-wide">Vaccinated</div>
                        </div> 
                    </div>
                     
                </div>
            </div>
        </div>
    </div>
</template>