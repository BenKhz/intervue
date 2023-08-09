<template>
  <v-container id="hero" style="position: relative">
    <h1>
      Welcome to the <br />
      Intellective <br />Pokemon Challenge
    </h1>
    <v-img class="logo" src="/intellective-mark.png" alt="Intellective Mark" height="100" width="auto" />
  </v-container>
  <div id="main">
    <v-container id="fav-container">
      <v-card class="card-container">
        <v-img class="card-image" src="ProfOak.png" alt="Professor Oak from Pokemon" height="260" />
        <v-card-text class="card-name">Card Name</v-card-text>
        <table style:width="100%">
          <tr>
            <th>Stat</th>
            <th>Power</th>
          </tr>
          <tr>
            <td>Strength</td>
            <td>100</td>
          </tr>
        </table>
      </v-card>
    </v-container>
    <v-container  id="poke-list" class="list-container">
      
    </v-container>
  </div>
  <v-container>
    <h2>
      This page is using Vue and Vuetify, but it's all in one component! <br>
      It needs data from the api! 😖
    </h2>
    <v-sheet  class="text-center info">
        <p class="my-4">Retrieve all pokemon : <code class="my-4"> http://localhost:5050/pokemon</code></p>
        <p class="my-4">Retreive specifc pokemon info : <code class="my-4"> http://localhost:5050/pokemon/{pokemon_name}</code></p>
      
    </v-sheet>
  </v-container>
</template>

<script>
  import PokemonCard from './PokemonCard.vue';
  export default {
    data: () => ({
      selectedPokemon: null,
    }),
    components: {
      PokemonCard
    },
    methods: {
      setSelected(pokemon) {
        console.log(pokemon)
        this.selectedPokemon = pokemon;
      }
    }
  }
</script>
