<template>
  <section id="contacto" class="section">
    <div class="container">

      <p class="section-label">¿Hablamos?</p>
      <div class="section-divider" />
      <h2 class="section-title">Mejora tus capacidades operativas</h2>
      <p class="section-text">
        Si tu organización necesita simplificar procesos complejos,
        integrar datos, automatizar decisiones o mejorar su rendimiento
        operativo, Grupo Resguardar puede ayudarte a diseñar una solución
        aplicable, robusta y medible.
      </p>

      <form class="contact-form" @submit.prevent="handleSubmit">

        <div class="form-row">
          <div class="form-field">
            <label for="nombre">Nombre</label>
            <input id="nombre" v-model="form.nombre" type="text" placeholder="Ana García" required />
          </div>
          <div class="form-field">
            <label for="empresa">Empresa</label>
            <input id="empresa" v-model="form.empresa" type="text" placeholder="Nombre de la organización" />
          </div>
        </div>

        <div class="form-field">
          <label for="email">Email</label>
          <input id="email" v-model="form.email" type="email" placeholder="ana@empresa.com" required />
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
            placeholder="Cuéntanos brevemente qué necesitas o en qué podemos ayudarte..."
          />
        </div>

        <button type="submit" class="btn-primary">
          <i class="fa-solid fa-paper-plane" aria-hidden="true" />
          Enviar mensaje
        </button>

      </form>

    </div>
  </section>
</template>

<script setup>
const chips = ['ESG', 'Tecnologías Duales', 'IA Aplicada', 'Automatización', 'Otro']

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

<style scoped>
.section-text{
  max-width: 600px;
  margin: 0 auto;
}


.btn-primary {
  margin: 0 0 60px 0;
  width: 100%;
  justify-content: center;
  cursor:pointer;
  
}
</style>