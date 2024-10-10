<script setup>
useHead({
  title: `সুরক্ষা : কোভিড-১৯ ভ্যাকসিনের জন্য নিবন্ধন করুন`,
});
import  { useRuntimeConfig } from "nuxt/app";
import { ref, onMounted } from 'vue';
import { required, helpers, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useToast } from 'vue-toast-notification';

const toast = useToast();

const config = useRuntimeConfig();
const isSubmitting = ref(false);
const centers = ref([]);
const errors = ref(null);

const registrationSetup = reactive({
  name: null,
  email: null,
  nid: null,
  vaccine_center_id: null,
});

const registrationSetupRules = computed(() => {
  return {
    name: {
      required: helpers.withMessage(
        "The Name Field Is Require",
        required
      ),
      $autoDirty: true,
    },
    email: {
      required: helpers.withMessage(
        "The Email Field Is Required",
        required
      ),
      email: helpers.withMessage("Invalid Email", email),
      $autoDirty: true,
    },
    nid: {
      required: helpers.withMessage(
        "The NID Field Is Require",
        required
      ),
      $autoDirty: true,
    },
    vaccine_center_id: {
      required: helpers.withMessage(
        "Please select vaccine center",
        required
      ),
      $autoDirty: true,
    },
  };
});
const v$ = useVuelidate(registrationSetupRules, registrationSetup,{ $externalResults: errors });

const storeRegistration= async ()=>{

  v$.value.$validate();
  isSubmitting.value = true;
  let fd = new FormData();
  for (const [key, value] of Object.entries(registrationSetup)) {
    if (value !== null) {
        fd.append(key, value);
    }
  }
   let result = await fetch(config.public.API_URL+'register', {
      method: 'POST',
      headers:{
        Accept:'application/json',
      },
      body:fd
    })
    let data = await result.json()
    isSubmitting.value = false;
    console.log(data,'data')
    if(data.success){
      toast.open({
        message: data.message,
        type: 'success',
        position: 'top-right', 
      });
    }
    if(data.errors){
      errors.value = data.errors

    }
}
  async function getCenters(){
    console.log('get center')
   const result = await fetch(config.public.API_URL+'vaccine-center', {
      method: 'GET',
    })
    const data = await result.json()
    if(data.data){
    centers.value=data.data
    }
  }

    onMounted(() => {
      getCenters();
    });

</script>
<template>
    <form @submit.prevent="storeRegistration" class="container mx-auto w-1/3 form bg-white p-6 my-10 relative font-sans">
      
      <h3 class="text-2xl text-gray-900 font-semibold mb-6">কোভিড-১৯ ভ্যাকসিন নিবন্ধন ফর্ম</h3>
    
      <div class="w-full mb-6 mt-3">
        <input v-model="registrationSetup.name" :class="{'focus:border-orange-500  border-orange-500': v$.name?.$error}" type="text" placeholder="আপনার নামঃ" class="appearance-none rounded focus:bg-white  p-2 mb-0 rounded-l-md focus:outline-none focus:border-gray-500 font-semibold text-md border-solid border-2 border-gray-400 transition ease-in duration-200   w-full">
        <strong v-if="v$?.name?.$error" class="text-red-500 text-xs">{{ v$.name?.$errors[0].$message}}</strong>
      </div>
      <div class="w-full mb-6 mt-3">
        <input type="number" v-model="registrationSetup.nid" :class="{'focus:border-orange-500  border-orange-500': v$.nid?.$error}" placeholder="জাতীয় পরিচয়পত্র নম্বরঃ" class="appearance-none rounded focus:bg-white  p-2 mb-0 rounded-l-md focus:outline-none focus:border-gray-500 font-semibold text-md border-solid border-2 border-gray-400 transition ease-in duration-200   w-full">
        <strong v-if="v$?.nid?.$error" class="text-red-500 text-xs">{{ v$.nid?.$errors[0].$message}}</strong>

      </div>
      
      <div class="w-full mb-6 mt-3"> 
        <div class="relative rounded-md shadow-sm ">
            <!-- if get error add class: focus:border-orange-500  border-orange-500  -->
            <input type="email" v-model="registrationSetup.email" :class="{'focus:border-orange-500  border-orange-500': v$.email?.$error}" placeholder="আপনার ই-মেইলঃ" class="appearance-none rounded w-full focus:bg-white  p-2 mt-2 mb-0 min-w-full rounded-l-md focus:outline-none focus:border-gray-500 font-semibold text-md border-solid border-2 border-gray-400 transition ease-in duration-200">
        </div>
        <strong v-if="v$?.email?.$error" class="text-red-500 text-xs">{{ v$.email?.$errors[0].$message}}</strong>
      </div>
      <div class="w-full mb-6 mt-3"> 
        <div class="relative rounded-md shadow-sm ">
          <label for="">টিকা কেন্দ্র</label>
            <select v-model="registrationSetup.vaccine_center_id" :class="{'focus:border-orange-500  border-orange-500': v$.vaccine_center_id?.$error}" class="p-2 mt-2 mb-0 min-w-full rounded-l-md focus:outline-none focus:border-gray-500 font-semibold text-md border-solid border-2 border-gray-400 transition ease-in duration-200"
            name="select_municipality"
            id="select_municipality"
          >
            <option v-for="(center, index) in centers" :value="center.id" :key="index" class="font-semibold hover:bg-orange-100 text-md p-4">{{center.name}}</option>
          </select>
        </div>
        <strong v-if="v$?.vaccine_center_id?.$error" class="text-red-500 text-xs">{{ v$.vaccine_center_id?.$errors[0].$message}}</strong>
      </div>
      <button type="submit" :disabled="v$.$errors.length!=0" :class="{' cursor-not-allowed ':isSubmitting}" class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3">
        <div class="relative inline-flex items-center">
          <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          {{ isSubmitting?'Submit...':'Submit' }}
        </div>
          
      </button>  
      
    </form>
</template>