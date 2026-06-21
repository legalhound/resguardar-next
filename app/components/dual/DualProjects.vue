<template>
  <section id="proyectos" class="section">
    <div class="container">

      <p class="section-label">Proyectos destacados</p>
      <div class="section-divider" />
      <h2 class="section-title">Casos reales</h2>

      <div class="projects">

        <article class="proj-card" v-for="project in projects" :key="project.name">
          <NuxtLink :to="project.url" target="_blank">
          <div class="proj-image">
            <img :src="project.img" :alt="project.name" loading="lazy" />
            <div class="proj-image__overlay" />
            <span class="proj-tag">{{ project.tag }}</span>
          </div>
          <div class="proj-body">
            <div class="proj-icon">
              <i :class="`fa-solid ${project.icon}`" aria-hidden="true" />
            </div>
            <div>
              <h3>{{ project.name }}</h3>
              <p>{{ project.desc }}</p>
            </div>
          </div>
</NuxtLink>
        </article>

      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    url:'#',
    name: 'Wingman',
    desc: 'Asistente inteligente orientado a mejorar capacidades operativas en tiempo real.',
    tag: 'IA Aplicada',
    icon: 'fa-helicopter',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    url:'https://www.sosteval.com/',
    name: 'Sosteval',
    desc: 'Proyecto orientado a sostenibilidad, evaluación y mejora del desempeño organizacional.',
    tag: 'ESG',
    icon: 'fa-leaf',
    // Imagen: sostenibilidad / naturaleza + tecnología
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
  },
  {
    url:'https://proyectovaldesc.com/es/',
    name: 'Valdesc',
    desc: 'Valoración, análisis y optimización de procesos complejos y cadenas de valor.',
    tag: 'Analítica',
    icon: 'fa-magnifying-glass-chart',
    // Imagen: data / analítica
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
]
</script>

<style scoped>
.projects {
  display: grid;
  gap: 1.5rem;
  margin-top: 2.5rem;
}

@media (min-width: 900px) {
  .projects {
    grid-template-columns: repeat(3, 1fr);
  }
}

.proj-card {
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: var(--accent-border);
    transform: translateY(-4px);
  }
}

/* ── Imagen ── */
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
  transform: scale(1.05);
}

.proj-image__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 40%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

.proj-tag {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--accent);
  background: rgba(0, 0, 0, 0.7);
  border: 0.5px solid var(--accent-border);
  border-radius: 100px;
  padding: 4px 12px;
  backdrop-filter: blur(6px);
}

/* ── Cuerpo ── */
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

  i {
    font-size: 18px;
    color: var(--accent);
  }
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