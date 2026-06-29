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
            <input id="nombre" v-model="form.nombre" type="text" placeholder="Nombre" required />
          </div>
          <div class="form-field">
            <label for="empresa">Empresa</label>
            <input id="empresa" v-model="form.empresa" type="text" placeholder="Nombre de la organización" />
          </div>
        </div>

        <div class="form-field">
          <label for="email">Email</label>
          <input id="email" v-model="form.email" type="email" placeholder="email@empresa.com" required />
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

        <button type="submit" class="btn-primary btn-submit" :disabled="status === 'loading'">
          <i v-if="status === 'loading'" class="fa-solid fa-spinner fa-spin" aria-hidden="true" />
          <i v-else class="fa-solid fa-paper-plane" aria-hidden="true" />
          {{ status === 'loading' ? 'Enviando...' : 'Enviar mensaje' }}
        </button>

        <p v-if="status === 'success'" class="form-feedback form-feedback--ok">
          <i class="fa-solid fa-circle-check" aria-hidden="true" />
          Mensaje enviado. Nos pondremos en contacto contigo pronto.
        </p>
        <p v-if="status === 'error'" class="form-feedback form-feedback--err">
          <i class="fa-solid fa-circle-exclamation" aria-hidden="true" />
          Ha ocurrido un error. Por favor inténtalo de nuevo.
        </p>

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

const status = ref('idle') // idle | loading | success | error

function toggleChip(chip) {
  const i = form.interes.indexOf(chip)
  if (i === -1) form.interes.push(chip)
  else form.interes.splice(i, 1)
}
const { send } = useMail()

async function handleSubmit() {
  status.value = 'loading'
  try {
    const interesStr = form.interes.join(', ') || '-'
    const empresaStr = form.empresa ? ' · ' + form.empresa : ''
    const subject    = '[Dual] Nuevo contacto de ' + form.nombre + empresaStr
    const text = [
      'Nuevo mensaje desde Tecnologías Duales:',
      '',
      'Nombre:  ' + form.nombre,
      'Empresa: ' + (form.empresa || '-'),
      'Email:   ' + form.email,
      'Interés: ' + interesStr,
      '',
      'Mensaje:',
      form.mensaje,
    ].join('\n')

    await send({
      from:    'mail@resguardar.ai',
      subject: subject,
      text:    text,
    })

    status.value = 'success'
    form.nombre  = ''
    form.empresa = ''
    form.email   = ''
    form.interes = []
    form.mensaje = ''
  } catch (error) {
    console.error(error)
    status.value = 'error'
  }
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

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-feedback {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  padding: 12px 16px;
  border-radius: 10px;
  margin-top: 0.5rem;
}

.form-feedback--ok {
  background: rgba(34, 197, 94, 0.1);
  border: 0.5px solid rgba(34, 197, 94, 0.3);
  color: #4ade80;
}

.form-feedback--err {
  background: rgba(239, 68, 68, 0.1);
  border: 0.5px solid rgba(239, 68, 68, 0.3);
  color: #f87171;
}
</style>