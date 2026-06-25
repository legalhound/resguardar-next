<template>
  <footer class="footer">
    <div class="container">

      <div class="footer__main">

        <!-- Contacto -->
        <div class="footer__contact">
          <p>
            <i class="fa-solid fa-envelope" aria-hidden="true" />
            Información general:
            <a href="mailto:contact@resguardar.ai">contact@resguardar.ai</a>
          <!-- / <a href="tel:+34639539607">+34 639 539 607</a>--> 
          </p>
        </div>

        <!-- RRSS -->
        <div class="footer__social">
          <a href="https://es.linkedin.com/company/resguardar-esg-certificaciones-flu" target="_blank" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin-in" aria-hidden="true" />
          </a>
        </div>

        <!-- Legal -->
        <div class="footer__legal">
          <div>
            <NuxtLink to="/privacy">Política de privacidad</NuxtLink>
            <span>|</span>
            <NuxtLink to="/cookies">Gestionar cookies</NuxtLink>
            <span>|</span>
            <NuxtLink to="/terms">Términos de uso</NuxtLink>
          </div>
          <div>
            <NuxtLink to="/legal">Aviso legal</NuxtLink>
            <span>|</span>
            <NuxtLink to="/regulatory">Estado regulatorio</NuxtLink>
            <span>|</span>
            <NuxtLink to="/anti-slavery">Contra la esclavitud</NuxtLink>
          </div>
        </div>

      </div>

      <div class="footer__bottom">
        <p>© 2026 Resguardar. Todos los derechos reservados.</p>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 3rem 0 2rem;
  border-top: 0.5px solid rgba(255, 255, 255, 0.08);
  background: rgba(8, 14, 24, 0.9);
  backdrop-filter: blur(12px);
}

/* ── Main row ── */
.footer__main {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.06);
}

@media (max-width: 900px) {
  .footer__main {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .footer__legal {
    align-items: center;
  }
}

/* ── Contacto ── */
.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer__contact p {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;

  i {
    color: var(--accent);
    font-size: 13px;
    flex-shrink: 0;
  }

  a {
    color: rgba(255, 255, 255, 0.75);
    transition: color 0.15s;

    &:hover { color: var(--accent); }
  }
}

/* ── RRSS ── */
.footer__social {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer__social a {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:hover {
    background: var(--accent-dim);
    border-color: var(--accent-border);
    color: var(--accent);
  }
}

/* ── Legal ── */
.footer__legal {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

.footer__legal div {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.footer__legal a {
  font-size: 0.78rem;
  color: var(--accent);
  opacity: 0.8;
  transition: opacity 0.15s;

  &:hover { opacity: 1; }
}

.footer__legal span {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.2);
}

/* ── Bottom ── */
.footer__bottom {
  padding-top: 1.5rem;
  text-align: center;

  p {
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.25);
    margin: 0;
  }
}
</style>