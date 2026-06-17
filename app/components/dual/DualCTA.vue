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

        <button type="submit" class="btn-primary btn-submit">
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
  // TODO: conectar con el backend o servicio de email
  console.log('Form submitted:', form)
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 640px;
  margin-top: 2.5rem;
}

.form-row {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 600px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-field label {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.form-field input,
.form-field textarea {
  background: var(--surface);
  border: 0.5px solid var(--border);
  color: var(--text);
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 0.9rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.5;
  }

  &:focus {
    border-color: var(--accent-border);
    box-shadow: 0 0 0 3px var(--accent-dim);
  }
}

.form-field textarea {
  min-height: 130px;
  resize: vertical;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  font-size: 0.78rem;
  font-weight: 500;
  background: var(--surface);
  color: var(--text-secondary);
  border: 0.5px solid var(--border);
  border-radius: 100px;
  padding: 5px 14px;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: var(--accent-border);
    color: var(--accent);
  }
}

.chip--active {
  background: var(--accent-dim);
  border-color: var(--accent-border);
  color: var(--accent);
}

.btn-submit {
  width: 100%;
  justify-content: center;
}
</style>