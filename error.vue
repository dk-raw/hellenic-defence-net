<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
})
</script>

<template>
    <div class="container">
        <h1 v-if="error.statusCode === 404">Η σελίδα δεν βρέθηκε!</h1>
        <div v-else>
            <h1>Σφάλμα {{ error.statusCode }}!</h1>
            <p class="lead fw-normal">Παρακαλώ δοκιμάστε ξανά</p>
        </div>
        <NuxtLink to="/" class="btn btn-outline-primary">Αρχική</NuxtLink>
    </div>
</template>
