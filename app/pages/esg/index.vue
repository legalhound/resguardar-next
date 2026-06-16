<template>
  <div class="esgBG">
    <Hero
      title="Sostenibilidad verificable"
      subtitle="Certificación ESG y tokenización de activos."
      color="#018c01"
    />
    <ESGServices />
    <Tokenization />
    <ESGBenefits />
  </div>
</template>

<script setup>
import Hero from "~/components/common/Hero.vue"
import ESGServices from '~/components/esg/ESGServices.vue'
import Tokenization from '~/components/esg/Tokenization.vue'
import ESGBenefits from '~/components/esg/ESGBenefits.vue'
</script>

<style scoped lang="scss">
.hero-home {
  min-height: 80vh;

  display: flex;
  align-items: center;

  h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
}

.areas {
  margin-top: 4rem;

  display: grid;
  gap: 2rem;

  grid-template-columns: repeat(2, 1fr);
}

.area {
  padding: 3rem;
  border-radius: 20px;
}

.esg {
  background: rgba(1, 140, 1, .15);
  border: 1px solid #018c01;
}

.dual {
  background: rgba(252, 156, 66, .15);
  border: 1px solid #fc9c42;
}
.esgBG{
  background-image: url("../../../public/images/backgroundESG.png");
  background-size: cover;     
  background-position: center; 
  background-repeat: no-repeat;
}

</style>