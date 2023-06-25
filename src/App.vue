<template>
  <v-app>
    <NavBar />
    <v-main>
      <Main />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Main from './components/Main.vue';

export default {
  components: {
    NavBar,
    Main
  }
};
</script>

<style>
:root {
  --typewriterSpeed: 2s;
  --nbrLetter: 14;
  --background: #f6f2fc;
  --text: #110722;
  --primaryColor: #aa5422;
  --secondaryColor: #010618;
  --accent: #22aa54;
  overflow-y: auto;
}



.v-application {
  background-image: url('./assets/blob-scene-haikei.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100dvh;

  font-size: 90%;

  @media only screen and (min-width: 600px) {
    font-size: 94%;
  }

  @media only screen and (min-width: 1000px) {
    font-size: 98%;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 100%;
  }
}
</style>