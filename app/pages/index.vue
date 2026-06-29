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
        <NuxtLink to="https://esg.resguardar.ai/" target="_blank" class="card card--esg">
          <!-- <NuxtLink to="/esg" class="card card--esg"> -->
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
        <h2>Construimos soluciones para entornos reales</h2>
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

          <button type="submit" class="btn--primary" :disabled="status === 'loading'">
            {{ status === 'loading' ? 'Enviando...' : 'Solicitar reunión' }}
          </button>

          <p v-if="status === 'success'" class="feedback feedback--ok">
            <i class="fa-solid fa-circle-check" aria-hidden="true" />
            Mensaje enviado. Nos pondremos en contacto contigo pronto.
          </p>
          <p v-if="status === 'error'" class="feedback feedback--err">
            <i class="fa-solid fa-circle-exclamation" aria-hidden="true" />
            Ha ocurrido un error. Por favor inténtalo de nuevo.
          </p>

        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'home'
})

const chips = ['ESG', 'Tecnologías Duales', 'IA Aplicada', 'Automatización', 'Otro']

const form = reactive({
  nombre: '',
  empresa: '',
  email: '',
  interes: [],
  mensaje: '',
})

const status = ref('idle') 

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
    const subject    = '[Resguardar] Nuevo contacto de ' + form.nombre + empresaStr
    const text = [
      'Nuevo mensaje desde resguardar.ai:',
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

  &--esg  { border: 2px solid rgb(1, 140, 1); }
  &--dual { border: 2px solid rgb(252, 156, 66); }
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

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 640px;
  margin: 0 auto;
  text-align: left;
}

.form-row {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--text-secondary);
  }

  input,
  textarea {
    background: rgba(255, 255, 255, 0.05);
    border: 0.5px solid rgba(255, 255, 255, 0.12);
    color: var(--text);
    border-radius: 10px;
    padding: 12px 14px;
    font-size: 0.9rem;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;

    &::placeholder {
      color: rgba(255, 255, 255, 0.25);
    }

    &:focus {
      border-color: rgba(252, 156, 66, 0.5);
      box-shadow: 0 0 0 3px rgba(252, 156, 66, 0.1);
    }
  }

  textarea {
    resize: vertical;
  }
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  font-size: 0.78rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.5);
  border: 0.5px solid rgba(255, 255, 255, 0.12);
  border-radius: 100px;
  padding: 5px 14px;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: rgba(252, 156, 66, 0.4);
    color: rgb(252, 156, 66);
  }

  &--active {
    background: rgba(252, 156, 66, 0.1);
    border-color: rgba(252, 156, 66, 0.4);
    color: rgb(252, 156, 66);
  }
}

.feedback {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  padding: 12px 16px;
  border-radius: 10px;
  margin-top: 0.5rem;

  &--ok {
    background: rgba(34, 197, 94, 0.1);
    border: 0.5px solid rgba(34, 197, 94, 0.3);
    color: #4ade80;
  }

  &--err {
    background: rgba(239, 68, 68, 0.1);
    border: 0.5px solid rgba(239, 68, 68, 0.3);
    color: #f87171;
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
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

  &:hover:not(:disabled)::before {
    left: 120%;
  }
}
</style>
