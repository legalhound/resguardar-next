<template>
<div class="dualBG">
  <Hero
    title="Tecnología útil para entornos reales"
    subtitle="IA, automatización y sistemas avanzados para organizaciones complejas."
    color="#fc9c42"
    class="dualBG"
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
.dualBG{
  background-image: url("../../../public/images/backgroundDUAL.png");
  background-size:cover; 
  background-position: center; 
  background-repeat: no-repeat;
}
</style>