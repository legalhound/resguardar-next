<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  color: string
}>()
</script>

<template>
<section class="hero">
  <div class="container">
    <h1 :style="{color}">
      {{ title }}
    </h1>
    <p>
      {{ subtitle }}
    </p>
  </div>
</section>


</template>

<style scoped>
.hero{
  padding:60px 0;
}

.hero h1{
  font-size:4rem;
  margin-bottom:2rem;
}

.hero p{
  max-width:800px;
  color:#cbd5e1;
  font-size:1.2rem;
  line-height:1.8;
}
</style>