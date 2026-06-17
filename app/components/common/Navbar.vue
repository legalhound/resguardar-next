<template>
  <header class="navbar">
    <div class="container navbar__content">

      <NuxtLink to="/dual" class="navbar__logo">
        <img src="/images/logo-resguardar-naranja.png" alt="Logo Resguardar" />
      </NuxtLink>

      <nav class="navbar__nav">
        <a href="#sectores">Sectores</a>
        <a href="#capacidades">Capacidades</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#metodologia">Metodología</a>
        <a href="#beneficios">Beneficios</a>
        <a href="#por-que-resguardar">Por qué Resguardar</a>
          <a href="#contacto" class="navbar__cta">Contacto</a>
        <!--<NuxtLink to="https://resguardar.ai/" target="_blank" class="navbar__esg"> 
          ESG
        </NuxtLink>--> 
      </nav>
      <button class="navbar__burger" @click="open = !open" :aria-expanded="open" aria-label="Abrir menú">
        <i :class="open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" aria-hidden="true" />
      </button>

    </div>

    <div class="navbar__mobile" :class="{ 'navbar__mobile--open': open }">
      <a href="#sectores" @click="open = false">Sectores</a>
      <a href="#capacidades" @click="open = false">Capacidades</a>
      <a href="#proyectos" @click="open = false">Proyectos</a>
      <a href="#metodologia" @click="open = false">Metodología</a>
      <a href="#beneficios" @click="open = false">Beneficios</a>
      <a href="#por-que-resguardar" @click="open = false">Por qué Resguardar</a>
      <NuxtLink to="https://resguardar.ai/" target="_blank" @click="open = false">ESG</NuxtLink>
      <NuxtLink to="/contact" class="navbar__cta" @click="open = false">Contacto</NuxtLink>
    </div>
  </header>
</template>

<script setup>
const open = ref(false)
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 10, 10, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.08);
}

.navbar__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:120px;
}

.navbar__logo img {
  height: 80px;
  display: block;
}

.navbar__nav {
  display: none;
  align-items: center;
  gap: 0.15rem;
}
@media (max-width: 900px){
  .navbar__burger {
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.2rem;
    padding: 6px;
    display: flex;
    align-items: center;
  }
}

@media (min-width: 900px) {
  .navbar__nav {
    display: flex;
  }

  .navbar__burger {
    display: none !important;
  }
}

.navbar__nav a {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.6);
  padding: 6px 12px;
  border-radius: 8px;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.07);
  }
}

.navbar__esg {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #018c01 !important;

}

.navbar__cta {
  font-size: 0.82rem !important;
  font-weight: 500 !important;
  color: #fff !important;
  background: var(--accent) !important;
  padding: 7px 16px !important;
  border-radius: 8px !important;
  margin-left: 0.4rem;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.88;
    background: var(--accent) !important;
  }
}



/* ── Menú móvil ── */
.navbar__mobile {
  display: none;
  flex-direction: column;
  padding: 0.75rem 1.5rem 1.25rem;
  border-top: 0.5px solid rgba(255, 255, 255, 0.08);
  gap: 0.25rem;

  a {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.65);
    padding: 9px 0;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.05);
    transition: color 0.15s;

    &:hover {
      color: #fff;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  .navbar__cta {
    margin: 0.75rem 0 0;
    text-align: center;
    padding: 10px 16px !important;
    border-radius: 8px !important;
  }
}

.navbar__mobile--open {
  display: flex;
}
</style>

