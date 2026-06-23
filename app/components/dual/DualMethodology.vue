<template>
  <section id="metodologia" class="section">
    <div class="container">

      <p class="section-label">Cómo trabajamos</p>
      <div class="section-divider" />
      <h2 class="section-title">Metodología</h2>
      <p class="section-text">De la necesidad operativa a la solución implantable</p>

      <div class="timeline">
        <div class="timeline__line" aria-hidden="true" />

        <div v-for="step in steps" :key="step.num" class="timeline__step">
          <div class="timeline__dot">
            <i :class="`fa-solid ${step.icon}`" aria-hidden="true" />
          </div>
          <p class="timeline__num">{{ step.num }}</p>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const steps = [
  { num: '01', icon: 'fa-stethoscope',    title: 'Diagnóstico',           desc: 'Procesos, datos y puntos de fricción' },
  { num: '02', icon: 'fa-pen-ruler',      title: 'Diseño funcional',      desc: 'Alineado con la realidad operativa' },
  { num: '03', icon: 'fa-code',           title: 'Desarrollo tecnológico', desc: 'IA y automatización adaptadas' },
  { num: '04', icon: 'fa-clipboard-check',title: 'Validación',            desc: 'Condiciones reales o simuladas' },
  { num: '05', icon: 'fa-rocket',         title: 'Implantación',          desc: 'Adopción, formación y evolución' },
]
</script>

<style scoped>

.timeline {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  margin-top: 3rem;
  position: relative;
}

.timeline__line {
  position: absolute;
  top: 19px;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent-border),
    var(--accent-border),
    transparent
  );
}

.timeline__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 8px;
  position: relative;
}

.timeline__dot {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--accent-dim);
  border: 1.5px solid var(--accent-border);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  z-index: 1;
  flex-shrink: 0;
  transition: background 0.2s, border-color 0.2s;

  i {
    font-size: 16px;
    color: var(--accent);
  }

  &:hover {
    background: var(--accent);
    i { color: #fff; }
  }
}

.timeline__num {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.1em;
  margin-bottom: 6px;
}

h3 {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 4px;
}

p {

  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 700px) {
  .timeline {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .timeline__line {
    top: 0; bottom: 0;
    left: 19px; right: auto;
    width: 1px; height: auto;
    background: linear-gradient(
      180deg,
      transparent,
      var(--accent-border),
      var(--accent-border),
      transparent
    );
  }

  .timeline__step {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
    gap: 16px;
  }

  .timeline__dot {
    margin-bottom: 0;
    flex-shrink: 0;
  }
}
</style>