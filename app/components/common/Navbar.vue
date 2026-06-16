<template>
  <header class="navbar">
    <div class="container navbar__content">
      <NuxtLink to="/" class="logo">
        <img src="/images/logo-resguardar-naranja.png" alt="Logo" />
      </NuxtLink>
      <nav>
        <NuxtLink to="https://resguardar.es/" target="_blank">ESG</NuxtLink>
        <NuxtLink to="/dual">Tecnologías Duales</NuxtLink>
        <NuxtLink to="/contact">Contacto</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .navbar {
    position: sticky;
    top: 0;
    background: transparent !important;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255,255,255,.05);

    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
    }

    nav {
      display: flex;
      gap: 2rem;
    }
  }

  .logo {
    img{
      height: 55px;
    }
  }
</style>