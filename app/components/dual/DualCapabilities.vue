<template>
  <section id="capacidades" class="section">
    <div class="container">

      <p class="section-label">Capacidades tecnológicas</p>
      <div class="section-divider" />
      <h2 class="section-title">Qué hacemos</h2>
      <p class="section-subtitle">Tecnología aplicada a los problemas reales de organizaciones complejas.</p>

      <!-- Marquee -->
      <div class="marquee-wrap" aria-hidden="true">
        <div class="marquee-track">
          <span v-for="cap in [...caps, ...caps]" :key="cap.label + Math.random()" class="cap-pill">
            <i :class="`fa-solid ${cap.icon}`" />
            {{ cap.label }}
          </span>
        </div>
      </div>

      <!-- Tabla -->
      <div class="cap-grid">
        <div v-for="cap in caps" :key="cap.label" class="cap-item">
          <i :class="`fa-solid ${cap.icon}`" aria-hidden="true" />
          <h3>{{ cap.label }}</h3>
          <p>{{ cap.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const caps = [
  { icon: 'fa-brain',      label: 'IA Aplicada',                   desc: 'Modelos ajustados a la realidad operativa del cliente.' },
  { icon: 'fa-robot',      label: 'Automatización Inteligente',     desc: 'Flujos automáticos que eliminan fricción operativa.' },
  { icon: 'fa-microchip',  label: 'Soporte Operativo',              desc: 'Sistemas de apoyo a la toma de decisiones en tiempo real.' },
  { icon: 'fa-chart-line', label: 'Analítica Avanzada',             desc: 'Dashboards y modelos predictivos basados en datos reales.' },
  { icon: 'fa-sliders',    label: 'Optimización',                   desc: 'Reducción de costes y mejora de rendimiento medible.' },
  { icon: 'fa-route',      label: 'Trazabilidad y Control',         desc: 'Control total sobre procesos y cadenas de valor complejas.' },
]
</script>

<style scoped>
.section{
  background-color: rgba(0, 0, 0, 0.193);
}
/* ── Marquee ── */
.marquee-wrap {
  margin-top: 2.5rem;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 80px;
    z-index: 2;
    pointer-events: none;
  }

  &::before { left: 0;  background: linear-gradient(90deg,  var(--bg), transparent); }
  &::after  { right: 0; background: linear-gradient(-90deg, var(--bg), transparent); }
}

.marquee-track {
  display: flex;
  gap: 12px;
  width: max-content;
  animation: marquee 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.cap-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  padding: 10px 20px;
  white-space: nowrap;
  font-size: 0.85rem;
  color: var(--text-secondary);
  transition: border-color 0.2s, color 0.2s;
  cursor: default;

  i { color: var(--accent); font-size: 14px; }

  &:hover {
    border-color: var(--accent-border);
    color: var(--accent);
  }
}

/* ── Tabla ── */
.cap-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2.5rem;
  border: 0.5px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
}

.cap-item {
  padding: 2rem 1.75rem;
  border-right: 0.5px solid var(--border);
  border-bottom: 0.5px solid var(--border);
  transition: background 0.2s;

  &:hover {
    background: var(--accent-dim);
  }

  &:nth-child(3n)   { border-right: none; }
  &:nth-child(n+4)  { border-bottom: none; }
}

.cap-item i {
  font-size: 20px;
  color: var(--accent);
  margin-bottom: 12px;
  display: block;
}

h3 {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 6px;
}

p {
  font-size: 0.78rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 700px) {
  .cap-grid {
    grid-template-columns: 1fr 1fr;
  }

  .cap-item:nth-child(3n)  { border-right: 0.5px solid var(--border); }
  .cap-item:nth-child(2n)  { border-right: none; }
  .cap-item:nth-child(n+5) { border-bottom: none; }
}
</style>