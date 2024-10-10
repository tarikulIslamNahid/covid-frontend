<script setup>
 const year = ref(new Date().getFullYear());
</script>
<template>
  <div>
    <p class="text-center p-4 text-gray-700 pt-10">
      © {{year}} Surokkha. All rights reserved. 
    </p>
  </div>
</template>