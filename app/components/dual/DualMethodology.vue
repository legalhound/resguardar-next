<template>
  <section id="metodologia" class="section">
    <div class="container">

      <p class="section-label">Cómo trabajamos</p>
      <div class="section-divider" />
      <h2 class="section-title">Metodología</h2>
      <p class="section-subtitle">De la necesidad operativa a la solución implantable</p>

      <div class="cards">

        <div class="card">
          <span class="step-badge">PASO 01</span>
          <div class="card-icon">
            <i class="fa-solid fa-stethoscope" aria-hidden="true" />
          </div>
          <h3>Diagnóstico</h3>
          <p>Analizamos procesos, datos, objetivos, restricciones y puntos de fricción.</p>
        </div>

        <div class="card">
          <span class="step-badge">PASO 02</span>
          <div class="card-icon">
            <i class="fa-solid fa-pen-ruler" aria-hidden="true" />
          </div>
          <h3>Diseño funcional</h3>
          <p>Definimos una solución útil, comprensible y alineada con la realidad operativa.</p>
        </div>

        <div class="card">
          <span class="step-badge">PASO 03</span>
          <div class="card-icon">
            <i class="fa-solid fa-code" aria-hidden="true" />
          </div>
          <h3>Desarrollo tecnológico</h3>
          <p>Integramos IA, automatización y herramientas digitales adaptadas al caso de uso.</p>
        </div>

        <div class="card">
          <span class="step-badge">PASO 04</span>
          <div class="card-icon">
            <i class="fa-solid fa-clipboard-check" aria-hidden="true" />
          </div>
          <h3>Validación</h3>
          <p>Probamos la solución en condiciones reales o simuladas para medir rendimiento.</p>
        </div>

        <div class="card">
          <span class="step-badge">PASO 05</span>
          <div class="card-icon">
            <i class="fa-solid fa-rocket" aria-hidden="true" />
          </div>
          <h3>Implantación</h3>
          <p>Acompañamos la adopción, formación y evolución de la herramienta.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.step-badge {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--accent);
  background: var(--accent-dim);
  border-radius: 4px;
  padding: 3px 8px;
  margin-bottom: 0.75rem;
}

h3 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}
</style>