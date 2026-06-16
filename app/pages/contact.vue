<template>

<section class="section">

<div class="container">

<h1 class="section-title">
Contacto
</h1>

<p class="section-text">
Solicita una reunión para conocer
nuestras capacidades ESG y Tecnologías Duales.
</p>

<form class="contact-form">

<input
type="text"
placeholder="Nombre"
/>

<input
type="email"
placeholder="Email"
/>

<textarea
placeholder="Mensaje"
/>

<button>
Enviar
</button>

</form>

</div>

</section>

</template>

<style scoped>
.contact-form{
display:flex;
flex-direction:column;
gap:1rem;
max-width:600px;
margin-top:2rem;
}

input,
textarea{
padding:1rem;
background:#111827;
border:1px solid #334155;
color:white;
border-radius:10px;
}

button{
background:#018c01;
color:white;
border:none;
padding:1rem;
border-radius:10px;
cursor:pointer;
}
</style>