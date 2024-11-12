<template>
  <div class="pdf-container">
    <h1>Trabajo Práctico PNT</h1>
    <iframe
      v-if="pdfUrl"
      :src="pdfUrl"
      width="100%"
      height="600px"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const pdfUrl = ref("");

onMounted(() => {
  pdfUrl.value = "/Trabajo Práctico PNT-2.pdf";
});
</script>

<style scoped>
.pdf-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #121212;
  color: #e0e0e0;
  padding: 20px;
  font-family: "Arial", sans-serif;
}

h1 {
  color: #ffaa4c;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
}
</style>
