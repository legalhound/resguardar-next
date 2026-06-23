<template>
<div class="dualBG">
  <Hero
    title="Tecnología útil para entornos reales"
    subtitle="IA, automatización y sistemas avanzados para organizaciones complejas."
    color="#fc9c42"
  />
    <DualSectors />
    <DualCapabilities />
    <DualProjects />
    <DualMethodology />
    <DualBenefits />
    <DualWhyResguardar />
    <DualCTA />
</div>


</template>

<script setup>
  import Hero from '~/components/common/Hero.vue'
  import DualSectors from '~/components/dual/DualSectors.vue'
  import DualCapabilities from '~/components/dual/DualCapabilities.vue'
  import DualProjects from '~/components/dual/DualProjects.vue'
  import DualMethodology from '~/components/dual/DualMethodology.vue'
  import DualBenefits from '~/components/dual/DualBenefits.vue'
  import DualWhyResguardar from '~/components/dual/DualWhyResguardar.vue'
  import DualCTA from '~/components/dual/DualCTA.vue'
</script>

<style scoped>

.dualBG {
  text-align: center;
  background-image: 
    linear-gradient(to bottom, rgba(13, 27, 42, 0.869), rgba(13, 27, 42, 0.914)),
    url("../../../public/images/backgroundDUAL.png");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed; 
  border-bottom: 1px solid rgb(13, 27, 42);
}

</style>