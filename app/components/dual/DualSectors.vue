<template>
  <section id="sectores" class="section">
    <div class="container">

      <p class="section-label">Sectores objetivo</p>
      <div class="section-divider" />
      <h2 class="section-title">Dónde operamos</h2>
      <p class="section-text">Tecnología adaptada a entornos complejos y de alta exigencia operativa.</p>

      <div class="sector-list">
        <div v-for="s in sectors" :key="s.num" class="sector-row">
          <span class="sr-num">{{ s.num }}</span>
          <span class="sr-name">{{ s.name }}</span>
          <span class="sr-tag">{{ s.tag }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const sectors = [
  { num: '01', name: 'Defensa y Seguridad',    tag: 'Alto riesgo' },
  { num: '02', name: 'Infraestructuras',        tag: 'Activos críticos' },
  { num: '03', name: 'Aeropuertos',             tag: 'Alta demanda' },
  { num: '04', name: 'Grandes Organizaciones',  tag: 'Escala compleja' },
]
</script>

<style scoped>
.sector-list {
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
}

.sector-row {
  display: flex;
  align-items: baseline;
  gap: 20px;
  padding: 22px 0;
  border-bottom: 0.5px solid var(--border);

  &:first-child {
    border-top: 0.5px solid var(--border);
  }
}

.sr-num {
  font-size: 0.9rem;
  font-weight: 700;
  color:var(--accent);
  width: 28px;
  flex-shrink: 0;
}

.sr-name {
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--text);
  flex: 1;
  letter-spacing: -0.02em;
}

.sr-tag {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent);
  white-space: nowrap;
}

@media (max-width: 480px) {
  .sr-name { font-size: 1.2rem; }
  .sr-tag  { display: none; }
}
</style>