<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const componentsMap = {
  XSS: defineAsyncComponent(
    () => import("../components/attacks/XSSComponent.vue"),
  ),
  // SQL: defineAsyncComponent(() => import('../components/Attacks/SQLComponent.vue')),
  // CSRF: defineAsyncComponent(() => import('../components/Attacks/CSRFComponent.vue')),
  // JWT: defineAsyncComponent(() => import('../components/Attacks/JWTComponent.vue')),
  // HTTPS: defineAsyncComponent(() => import('../components/Attacks/HTTPSComponent.vue')),
};
const attacks = Object.keys(componentsMap);


</script>

<template>
    <main :style="{ paddingTop: `10px` }" class="flex-grow">
      <div class="container mx-auto px-4 py-4">
        <component
          v-for="section in attacks"
          :id="section"
          :key="section"
          :is="componentsMap[section]"
          class="component-wrapper mb-12 p-4 md:p-6 rounded-lg shadow-sm bg-white transition-all duration-300 hover:shadow-md"
        >
        </component>
      </div>
    </main>
</template>
