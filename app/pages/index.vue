<template>
  <main class="home">
    <section class="hero">
      <div class="container">
        <h1 class="hero__title">
          Tecnología, sostenibilidad y transformación
        </h1>
        <p class="hero__subtitle">
          Integramos certificación ESG, tokenización de activos,
          inteligencia artificial y tecnologías avanzadas para organizaciones complejas.
        </p>
      </div>
    </section>
    <section class="areas">
      <div class="container areas__grid">
      <NuxtLink to="https://resguardar.ai/" target="_blank" class="card card--esg">
      <!-- <NuxtLink to="/esg" class="card card--esg">--> 
        <img src="/images/logo-resguardar.png" alt="Logo" />
        <h2>ESG & Tokenización</h2>
        <p>
          Certificación, sostenibilidad, trazabilidad y nuevos modelos de valor basados en activos digitales.
        </p>
        <ul>
          <li>Certificaciones ESG</li>
          <li>Huella de carbono</li>
          <li>Tokenización de activos</li>
          <li>Reporting verificable</li>
        </ul>
      </NuxtLink>
        <NuxtLink to="/dual" target="_blank" class="card card--dual">
          <img src="/images/logo-resguardar-naranja.png" alt="Logo" />
          <h2>Tecnologías Duales</h2>
          <p>
            IA, automatización y sistemas avanzados para entornos operativos complejos y críticos.
          </p>
          <ul>
            <li>IA aplicada</li>
            <li>Automatización inteligente</li>
            <li>Analítica avanzada</li>
            <li>Soporte operativo</li>
          </ul>
        </NuxtLink>
      </div>
    </section>
    <section class="cta">
      <div class="container">
        <h2>
          Construimos soluciones para entornos reales
        </h2>
        <p>
          Organizaciones públicas y privadas confían en nuestras soluciones para mejorar decisión, eficiencia y trazabilidad.
        </p>
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-row">
        <div class="form-field">
          <label for="nombre">Nombre</label>
          <input
            id="nombre"
            v-model="form.nombre"
            type="text"
            placeholder="Nombre"
            required
          />
        </div>

        <div class="form-field">
          <label for="empresa">Empresa</label>
          <input
            id="empresa"
            v-model="form.empresa"
            type="text"
            placeholder="Nombre de la organización"
          />
        </div>
      </div>

      <div class="form-field">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="email@empresa.com"
          required
        />
      </div>

      <div class="form-field">
        <label>Área de interés</label>
        <div class="chips">
          <button
            v-for="chip in chips"
            :key="chip"
            type="button"
            class="chip"
            :class="{ 'chip--active': form.interes.includes(chip) }"
            @click="toggleChip(chip)"
          >
            {{ chip }}
          </button>
        </div>
      </div>

      <div class="form-field">
        <label for="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          v-model="form.mensaje"
          rows="4"
          placeholder="Cuéntanos brevemente qué necesitas o en qué podemos ayudarte..."
        />
      </div>

      <button type="submit" class="btn--primary">
        Solicitar reunión
      </button>
    </form>
      </div>
    </section>
  </main>
</template>
<script setup>
  definePageMeta({
    layout: 'home'
  })
  const chips = ['ESG', 'Tecnologías Duales', 'IA Aplicada', 'Automatización', 'Otro'];

  const form = reactive({
    nombre: '',
    empresa: '',
    email: '',
    interes: [],
    mensaje: '',
  })
function toggleChip(chip) {
  const i = form.interes.indexOf(chip)
  if (i === -1) form.interes.push(chip)
  else form.interes.splice(i, 1)
}

function handleSubmit() {
  console.log('Form submitted:', form)
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  background-image: url("../../public/images/background.png");
  background-size: cover;     
  background-position: center; 
  background-repeat: no-repeat;
}
.hero {
  padding: 4em;
  text-align: center;
  &__title {
    font-size: 3.5rem;
    line-height: 1.1;
    max-width: 900px;
    margin: 0 auto 2rem auto;
  }
  &__subtitle {
    color: var(--text-secondary);
    max-width: 800px;
    font-size: 1.2rem;
    line-height: 1.8;
    margin: 0 auto;
  }
}
.areas__grid {
  display: grid;
  gap: 2rem;
}
@media (min-width: 900px) {
  .areas__grid {
    grid-template-columns: 1fr 1fr;
  }
}
.card {
  padding: 2.5rem;
  border-radius: 20px;
  background: rgba(13, 27, 42, 0.535);
  text-decoration: none;
  transition: transform .2s ease, border .2s ease;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  ul {
    color: var(--text-secondary);
    padding-left: 1.2rem;
  }
  &:hover {
    transform: translateY(-5px);
    border-color: white;
  }
  &--esg {
    border: 2px solid rgb(1, 140, 1);
  }
  &--dual {
    border: 2px solid rgb(252, 156, 66);
  }
}
.cta {
  width: 100%;
  margin: 6rem auto 0 auto;
  text-align: center;
  padding: 2rem 0;
  background-color: rgba(0, 0, 0, 0.246);
  h2 {
    font-size: 2.5rem;
    margin: 1rem auto;
  }
  p {
    margin: 0 auto;
    color: var(--text-secondary);
    max-width: 700px;
    margin-bottom: 2rem;
    line-height: 1.7;
  }
}
.btn--primary {
  padding: 16px 32px;
  border: 2px solid rgba(0, 160, 0, 0.531);
  border-radius: 25px;
  background: linear-gradient(
    135deg,
    #62ff0029 0%,
    #0ece0032 40%,
    #ff8c0068 70%,
    #ffb24723 100%
  );
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow:
    0 0 10px rgba(0, 255, 136, 0.162),
    0 0 25px rgba(255, 140, 0, 0.4),
    inset 0 0 15px rgba(255, 255, 255, 0.043);
  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow:
      0 0 15px rgba(0, 255, 136, 0.117),
      0 0 35px rgba(255, 140, 0, 0.406),
      0 0 60px rgba(255, 140, 0, 0.4);
  }
  &::before {
    content: "";
    position: absolute;
    top: -100%;
    left: -30%;
    width: 50%;
    height: 300%;
    background: rgba(255, 255, 255, 0.071);
    transform: rotate(25deg);
    transition: 0.6s;
  }
  &:hover::before {
    left: 120%;
  }
}

</style>