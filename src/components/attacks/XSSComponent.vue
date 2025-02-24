<template>
  <section
    class="mb-12 p-6 rounded-lg shadow-sm bg-base-100 transition-all duration-300 hover:shadow-md"
    style="min-height: 100vh"
  >
    <div id="XSS">
      <h2 class="text-2xl font-bold mb-4 text-[#31475e]">Cross-Site Scripting (XSS)</h2>
      <p class="mb-4 text-[#31475e]">
        XSS permite inyectar scripts maliciosos en páginas web vistas por otros
        usuarios.
      </p>
      <form @submit.prevent="submitXSS" class="mb-4">
        <v-text-field
          autocomplete="false"
          id="xssInput"
          v-model="xssInput"
          label="Introduce un script XSS"
          hide-details="auto"
          outlined
          dense
          color="primary"
          base-color="lineinput"
        ></v-text-field>
        <button type="submit" class="bg-[#3FB984] text-white px-4 py-2 rounded-md cursor-pointer hover:scale-95 mt-5">Enviar</button>
      </form>
      <div v-html="xssOutput" class="prose mb-4"></div>
      <div class="mb-4">
        <h3 class="text-xl font-bold mb-2 text-[#31475e]">Ejemplos básicos de XSS:</h3>
        <ul class="list-disc list-inside">
          <li v-for="(comment, index) in comments" :key="index" class="mb-4">
            <p class="mb-4" v-html="comment.comment"></p>
          </li>
        </ul>
      </div>
      <div class="text-start mt-5">
        <button
          @click="show = !show"
          type="submit"
          class="bg-[#3FB984] text-white px-4 py-2 rounded-md cursor-pointer hover:scale-95 w-32"
        >
          {{ show ? "Ocultar Tip" : "Mostrar Tip" }}
        </button>
      </div>
      <div v-if="show">
        <h3 class="text-xl font-bold mb-2">Prevención de XSS:</h3>
        <p class="mb-2">
          Para prevenir XSS, es importante escapar correctamente los datos de
          entrada y utilizar métodos seguros para renderizar contenido HTML.
        </p>
        <ul class="list-disc list-inside">
          <li>Escapar caracteres especiales en el lado del servidor.</li>
          <li>Utilizar bibliotecas de sanitización de HTML.</li>
          <li>Implementar Content Security Policy (CSP).</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const xssInput = ref("");
const xssOutput = ref("");

const show = ref(false);

const submitXSS = () => {
  xssOutput.value = xssInput.value;
};

//Aqui debemos cambiar código para consumir el endpoint : /attacls/xss
// Para obtener los comentarios de la base de datos
// y tambien para enviar los comentarios a la base de datos

const comments: any[] = [
  // { comment: '<img src="x" onerror="alert(1)">' },
  {
    comment:
      '<a href="https://userinyerface.com/" class="bg-[#31475e] text-white px-4 py-2 rounded-md cursor-pointer hover:scale-95 mt-5" > Clickeame </a>',
  },
];
</script>
