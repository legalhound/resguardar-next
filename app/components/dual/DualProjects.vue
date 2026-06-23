<template>
  <section id="proyectos" class="section">
    <div class="container">

      <p class="section-label">Proyectos destacados</p>
      <div class="section-divider" />
      <h2 class="section-title">Casos reales</h2>

      <div class="projects">

        <article class="proj-card proj-card--featured">
          <div class="proj-header">
            <span class="proj-tag tag-ia">IA Aplicada</span>
          </div>
          <div class="tabla-wrap">
            <table class="tabla">
              <thead>
                <tr>
                  <th>Tecnología</th>
                  <th>Uso en Resguardar ESG</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in wingmanRows" :key="row[0]">
                  <td class="td-tech">{{ row[0] }}</td>
                  <td class="td-uso">{{ row[1] }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <!-- Fila inferior: Sosteval + Valdesc -->
        <div class="proj-row">

          <article class="proj-card">
            <div class="proj-image">
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80" alt="Sosteval" loading="lazy" />
              <div class="proj-image__overlay" />
              <span class="proj-tag">ESG</span>
            </div>
            <div class="proj-body">
              <div class="proj-icon">
                <i class="fa-solid fa-leaf" aria-hidden="true" />
              </div>
              <div>
                <h3>Sosteval</h3>
                <p>Proyecto orientado a sostenibilidad, evaluación y mejora del desempeño organizacional.</p>
              </div>
            </div>
          </article>

          <article class="proj-card">
            <div class="proj-image">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Valdesc" loading="lazy" />
              <div class="proj-image__overlay" />
              <span class="proj-tag">Analítica</span>
            </div>
            <div class="proj-body">
              <div class="proj-icon">
                <i class="fa-solid fa-magnifying-glass-chart" aria-hidden="true" />
              </div>
              <div>
                <h3>Valdesc</h3>
                <p>Valoración, análisis y optimización de procesos complejos y cadenas de valor.</p>
              </div>
            </div>
          </article>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const wingmanRows = [
  ['IA / LLM (modelos de lenguaje)',        'AI Assistant ESG, análisis documental, generación de informes, RAG normativo'],
  ['Visión artificial + CUDA C paralelo sobre GPU', 'Detección de objetos y anomalías en infraestructuras mediante drones'],
  ['Fotogrametría, modelos neuronales',      'Gemelos digitales de activos e infraestructuras desde vídeo de dron'],
  ['Blockchain BSV + protocolo STAS',        'Registro inmutable de datos ESG, certificación verificable, tokenización'],
  ['EBSI / W3C Verifiable Credentials',      'Credenciales verificables de certificación ESG para el ecosistema europeo'],
  ['Automatización robótica (UGV/USV/drones)', 'Recogida de datos en campo, inspección de activos, batimetría fluvial'],
  ['Impresión 3D de estructuras funcionales', 'Prototipos rápidos de plataformas físicas a coste marginal muy bajo'],
  ['Procesamiento de datos en tiempo real',  'Control Tower ESG, alertas automáticas, integración con sistemas de obra'],
]
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 2.5rem;
}

/* ── Fila inferior ── */
.proj-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

@media (max-width: 640px) {
  .proj-row { grid-template-columns: 1fr; }
}

/* ── Card base ── */
.proj-card {
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: var(--accent-border);
    transform: translateY(-3px);
  }
}

/* ── Card featured: Wingman ── */
.proj-card--featured {
  transform: none;

  &:hover { transform: none; }
}

.proj-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-bottom: 0.5px solid var(--border);
}

.proj-header h3 {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  margin: 0;
}

/* ── Tabla ── */
.tabla-wrap {
  overflow-x: auto;
}

.tabla {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;
}

.tabla thead tr {
  background: rgba(13, 27, 42, 0.8);
}

.tabla thead th {
  padding: 12px 16px;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-bottom: 2px solid var(--accent);
  &:first-child { width: 38%; }
}

.tabla tbody tr {
  border-bottom: 0.5px solid var(--border);
}

.td-tech {
  padding: 12px 16px;
  color: var(--text);
  font-weight: 400;
  vertical-align: top;
  border-right: 0.5px solid var(--border);
  position: relative;

}

.td-uso {
  padding: 12px 16px;
  color: var(--text-secondary);
  vertical-align: top;
  line-height: 1.6;
}

/* ── Cards imagen ── */
.proj-image {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.proj-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.proj-card:hover .proj-image img {
  transform: scale(1.04);
}

.proj-image__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.55) 100%);
}

.proj-tag {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--accent);
  background: rgba(0, 0, 0, 0.65);
  border: 0.5px solid var(--accent-border);
  border-radius: 100px;
  padding: 4px 12px;
  backdrop-filter: blur(6px);
}

/* en la card featured el tag va en el header, no encima de imagen */
.proj-header .proj-tag {
  position: static;
  backdrop-filter: none;
}

/* ── Body cards pequeñas ── */
.proj-body {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
}

.proj-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--accent-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  i { font-size: 17px; color: var(--accent); }
}

h3 {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 4px;
}

p {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}
</style>