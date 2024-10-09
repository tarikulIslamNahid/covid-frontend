<script setup>
 const year = ref(new Date().getFullYear());
</script>
<template>
    <p class="text-center p-4 text-gray-700 pt-10">
        <div>© {{year}} Surokkha. All rights reserved.</div>
  </p>
</template>