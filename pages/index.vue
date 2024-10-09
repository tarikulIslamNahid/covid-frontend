<script setup>
const items = ref([
    {
        title: 'অনলাইনে নিবন্ধন',
        description: 'প্রথমে এই পোর্টালের মাধ্যমে জাতীয় পরিচয়পত্র ও সঠিক মোবাইল নম্বর যাচাইপূর্বক অনলাইনে নিবন্ধন সম্পন্ন করবেন।'
    }
]);
const year = ref(new Date().getFullYear());


</script>

<template>
    <VApp>
        <VAppBar>
            <VToolbar>
                <VToolbarTitle>Surokkha</VToolbarTitle>
            </VToolbar>
        </VAppBar>
        
        <VContainer>
            <!-- Hero Section -->
            <VRow class="text-center" justify="center">
                <VCol cols="12">
                    <h1>স্বাগতম সুরক্ষা পোর্টালে</h1>
                    <VBtn color="primary" @click="register">নিবন্ধন করুন</VBtn>
                </VCol>
            </VRow>

            <div>
                <v-row>
                    <v-col cols="12" md="6" v-for="item in items" :key="item.title">
                        <VCard>
                            <VCardTitle>{{ item.title }}</VCardTitle>
                            <VCardText>{{ item.description }}</VCardText>
                        </VCard>
                    </v-col>
                </v-row>
            </div>
        </VContainer>

        <VFooter>
            <div>© {{year}} Surokkha. All rights reserved.</div>
            <div>
                <a href="/terms">Terms of Service</a> | 
                <a href="/privacy">Privacy Policy</a>
            </div>
        </VFooter>
    </VApp>
</template>

<style>
/* Add any custom styles here */
</style>