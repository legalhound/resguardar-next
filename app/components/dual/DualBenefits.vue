<template>
  <section id="beneficios" class="section">
    <div class="container">

      <p class="section-label">Beneficios</p>
      <div class="section-divider" />
      <h2 class="section-title">Resultados que importan</h2>

      <div class="cards cards--2col">

        <div class="benefit-card">
          <div class="card-icon">
            <i class="fa-solid fa-lightbulb" aria-hidden="true" />
          </div>
          <span>Mejor capacidad de decisión</span>
        </div>

        <div class="benefit-card">
          <div class="card-icon">
            <i class="fa-solid fa-wave-square" aria-hidden="true" />
          </div>
          <span>Reducción de fricción operativa</span>
        </div>

        <div class="benefit-card">
          <div class="card-icon">
            <i class="fa-solid fa-trending-up" aria-hidden="true" />
          </div>
          <span>Mayor eficiencia en procesos críticos</span>
        </div>

        <div class="benefit-card">
          <div class="card-icon">
            <i class="fa-solid fa-database" aria-hidden="true" />
          </div>
          <span>Integración de datos dispersos</span>
        </div>

        <div class="benefit-card">
          <div class="card-icon">
            <i class="fa-solid fa-circle-check" aria-hidden="true" />
          </div>
          <span>Optimización de recursos</span>
        </div>

        <div class="benefit-card">
          <div class="card-icon">
            <i class="fa-solid fa-eye" aria-hidden="true" />
          </div>
          <span>Mejora del control y la trazabilidad</span>
        </div>

        <div class="benefit-card">
          <div class="card-icon">
            <i class="fa-solid fa-bolt" aria-hidden="true" />
          </div>
          <span>Mayor capacidad de respuesta</span>
        </div>

        <div class="benefit-card">
          <div class="card-icon">
            <i class="fa-solid fa-maximize" aria-hidden="true" />
          </div>
          <span>Soluciones escalables y adaptables</span>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.benefit-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 16px;
  padding: 1rem 1.25rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--accent-border);
  }
}

.benefit-card .card-icon {
  flex-shrink: 0;
  margin-bottom: 0;
}

span {
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--text);
  line-height: 1.4;
}
</style>