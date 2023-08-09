<template>
  <v-app>
    <v-main>
      <Pokedex />
    </v-main>
  </v-app>
</template>

<script setup>
  import Pokedex from '@/components/Pokedex.vue'
</script>

<style>
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New';
  border:1px solid orange; background:black; padding: 6px; border-radius:4px
}

.info > code {
  margin: 1rem 2rem;
}
a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

table {
  width: -webkit-fill-available;
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

#main {
  display:grid;
  grid-template-columns: repeat(2, 1fr);
}

.logo {
  position: absolute;
  top: 20%;
  right: 10%;
  animation: wiggle 1s infinite ease-in-out alternate;
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.list-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  grid-column-start: 2;
}

#fav-container .card-container {
  transform: none;
  position: sticky;
  top:2rem;
  max-height:600px
}

.card-container {
  border-radius:6px;
  animation: appear 1s normal forwards ease-in-out;
  transition: all 300ms;
  min-width:100px;
  padding:1rem;
  border: 1px solid rgba(255, 255, 255, 0.87);
  max-height: 200px
}
.card-container:hover {
  transform: scale(1.1) translateY(-10px);
  box-shadow: 0 10px 20px rgba(226, 21, 253, 0.39), 0 4px 8px rgba(0, 0, 0, 1);
  cursor:pointer;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@keyframes wiggle {
  0% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(30deg);
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}


@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

</style>
