<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import './assets/base.css'; // Importiere die globale CSS-Datei
import './assets/main.css'; // Spezifische Stile für Layouts oder Komponenten


import Myself from '@//me2.jpeg'; 

import { ref } from 'vue'; 
//Date für DarkMode
const darkMode = ref(false);

// Funktion, um den DarkMode an- und auszuschalten
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
};

</script>

<template>
<div :class="['quicklinks-container', { dark: darkMode }]">
    <h1>My Quicklinks</h1>
    <img :src="Myself" alt="Selfie of Alina" class="mein-foto" />

<button class="toggle-button" @click="toggleDarkMode">
Switch to {{ darkMode ? 'Light' : 'Dark' }} Mode
  </button>
<div class="links">
        <a href="https://lina98st.github.io/alina.dev/" target="_blank" rel="noopener noreferrer">
          My Portfolio/Projects
        </a>
        <a href="https://github.com/lina98st" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href="https://www.linkedin.com/in/alina-ste/" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
        <a href="https://www.instagram.com/alina.devlife/?hl=de" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
      </div>
</template>

<style scoped>


</style>
