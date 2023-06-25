<template>
    <div class="main d-flex justify-center flex-column mt-10 ">

        <!---------------- PARTIE PRESENTATION ---------------->

        <v-card class="intro w-75 d-flex flex-column mx-auto mb-5 justify-center" elevation="4">
            <v-card-text class="text-center pb-0 mt-2">
                <span class="typewriter">Maxime Olivier </span>
            </v-card-text>
            <v-card-text class="subtitle text-center pt-">
                <span class="subtitle">Developpeur Web</span>
            </v-card-text>
            <div class="logo d-flex flex-row justify-center mb-2">
                <a class="fa-brands fa-github"></a>
                <a class="fa-brands fa-linkedin"></a>
                <a class="fa-solid fa-envelope"></a>
            </div>
        </v-card>

        <!---------------- PARTIE COMPETENCES / PROJETS ---------------->

        <v-card class="test  d-flex flex-column mx-10 mb-5" elevation="4">

            <!---------------- PARTIE COMPETENCES ---------------->

            <v-container fluid class="d-flex flex-column flex-md-row align-center">
                <v-col cols="12" md="4">
                    <v-card elevation="10" class="skills pa-2 text-center">
                        <span class="text1">MES COMPÉTENCES</span>
                        <v-col v-for="(framework, index) in store.frameworks" :key="index" md="12">
                            <div @click="ChangeProjets(framework.nom)" class="skill font-weight-black">
                                <v-hover v-slot="{ isHovering, props }">
                                    <v-btn :elevation="isHovering ? 24 : 8" block rounded="lg" color="var(--secondaryColor)"
                                        @click="Reset()">
                                        <span class="text-white">{{ framework.nom }}</span>
                                    </v-btn>
                                </v-hover>
                            </div>
                        </v-col>
                        <v-col md="12">
                            <div class="skill font-weight-black" @click="AllProjets">
                                <v-btn block rounded="lg" color="var(--secondaryColor)" @click="Reset()">
                                    <span class="text-white">Tous mes projets </span>
                                </v-btn>
                            </div>
                        </v-col>
                    </v-card>
                </v-col>

                <!---------------- PARTIE PROJETS ---------------->

                <v-col cols="12" md="8">
                    <v-card elevation="10" class="projects pa-2 text-center">
                        <span class="text2">MES PROJETS {{ nom }}</span>
                        <v-row class="p d-flex justify-center flex-column flex-md-row ma-2">
                            <div class="d-flex justify-center" v-if="!selectionComp">
                                <span class="text2">Choisir une compétence</span>
                            </div>
                            <template v-else class="w-100">
                                <template v-if="!selectionProjet">
                                    <v-col v-for="(projet, index) in projets[0]" :key="index" cols="12" md="6" class="x">
                                        <span class="text2">{{ projet.nom }}</span>
                                        <v-sheet>
                                            <v-carousel height="250" hide-delimiters progress="var(--primaryColor)" cycle>
                                                <v-carousel-item v-for="(image, i) in projet.images" :key="i"
                                                    :src="image.src" :alt="image.text" cover @click="Projet(projet)">
                                                </v-carousel-item>
                                            </v-carousel>
                                        </v-sheet>
                                    </v-col>
                                </template>
                                <div v-else
                                    class="d-flex flex-column flex-md-row justify-center justify-md-center w-100 align-center">
                                    <div class="s d-flex align-center flex-column">
                                        <v-carousel height="280" hide-delimiters progress="var(--primaryColor)" cycle
                                            class="test1">
                                            <v-carousel-item v-for="(image, i) in projetSelec[0].images" :key="i"
                                                :src="image.src" :alt="image.text" cover>
                                            </v-carousel-item>
                                        </v-carousel>
                                        <v-btn class="btn d-flex justify-center w-50 mt-2" color="var(--primaryColor)"> Voir
                                            Images
                                            <v-overlay activator="parent" scroll-strategy="reposition"
                                                transition="scroll-y-transition" position="center"
                                                class="d-flex justify-center align-center">
                                                <v-card class="pa-2">
                                                    <v-carousel height="auto" hide-delimiters progress="var(--primaryColor)"
                                                        class="carou" cycle>
                                                        <v-carousel-item v-for="(image, i) in projetSelec[0].images"
                                                            :key="i" :src="image.src" :alt="image.text" cover>
                                                        </v-carousel-item>
                                                    </v-carousel>
                                                </v-card>
                                            </v-overlay>
                                        </v-btn>
                                    </div>
                                    <div class="projet d-flex flex-column ml-5 w-50">
                                        <span class="titre">{{ projetSelec[0].nom }}</span>
                                        <v-divider></v-divider>
                                        <span class="descri">{{ projetSelec[0].description }}</span>
                                        <v-divider></v-divider>
                                        <span class="descri">Framework(s) :</span>
                                        <ul v-for="(framework, i) in projetSelec[0].frameworks" :key="i">
                                            <li class="descri">- {{ framework }}</li>
                                        </ul>
                                        <div class="d-flex justify-end">
                                            <v-btn elevation="6" class="btn w-25 " color="var(--primaryColor)"
                                                @click="Reset()" aria-label="Retour">
                                                Retour
                                            </v-btn>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </v-row>
                    </v-card>
                </v-col>
            </v-container>
        </v-card>
    </div>
</template>

<script setup>
import { useDefaultStore } from '../stores/index'
import { ref, computed } from 'vue';
import { useField, useForm } from 'vee-validate'

const store = useDefaultStore()

const projets = ref([])
const selectionComp = ref(false)
const nom = ref('')
const selectionProjet = ref(false)
const projetSelec = ref([])


function ChangeProjets(n) {
    projets.value = []
    selectionComp.value = true
    projets.value.push(store.projets.filter(p => p.frameworks.includes(n)))
    nom.value = n
}

function AllProjets() {
    projets.value = []
    selectionComp.value = true
    projets.value.push(store.projets)
    nom.value = ''
}

function Projet(p) {
    projetSelec.value = []
    selectionProjet.value = true
    projetSelec.value.push(p)
}

function Reset() {
    selectionProjet.value = false
}


</script>





<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Karla:ital,wght@0,500;1,600&display=swap');


.intro {
    font-family: 'Inconsolata', sans-serif;
}

.carou {
    max-width: 1000px;
}

.logo {
    gap: 10px;

}

.logo a {
    font-size: 25px;
}

.test1 {
    max-width: 350px;
    min-width: 350px;
    width: 60%;
}

.s .btn {
    color: var(--background);
}

.test {
    font-family: 'Karla', sans-serif;
    -webkit-backdrop-filter: blur(15px);
    /* assure la compatibilité avec safari */
    backdrop-filter: blur(15px);
    background-color: rgba(182, 182, 182, 0.2);
    /* opacity: 0;
    animation: fadeInUp 1s ease calc(var(--typewriterSpeed) + 1s) forwards; */
}

.skills {
    background-color: var(--primaryColor);

}

.skill {
    cursor: pointer;
}

.projects {
    background-color: var(--secondaryColor);
}

.text1,
.text2 {
    font-weight: bolder;
    font-size: 2rem;
}

.text1 {
    color: var(--secondaryColor);
}

.text2 {
    color: var(--primaryColor);
}

.p {
    display: flex;
    justify-content: center;
}

.p .text2 {
    font-family: 'Karla', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: normal;
}

.t .text2 {
    color: var(--secondaryColor);
}

.x .text2 {
    color: var(--background);
}

.skills .text2 {
    font-family: 'Karla', sans-serif;
    font-size: 1.2rem;
    color: var(--secondaryColor);

}

.projet {
    text-align: left;
    color: var(--background);
    gap: 10px;
    width: 40%;
}

.projet ul li {
    list-style: none;
}

.projet .titre {
    text-transform: uppercase;
    font-size: 1.5rem;
    text-decoration: underline;
}

.projet .descri {
    font-size: 1.2rem;
}

.cursor:hover {
    cursor: pointer;
}


.cursor {
    cursor: pointer;
}


.typewriter,
.subtitle {
    color: var(--text);
    font-weight: bold;
}

.subtitle {
    font-size: 1.7rem;
    opacity: 0;
    animation: fadeInUp 1s ease calc(var(--typewriterSpeed) + 0.5s) forwards;
    text-decoration: underline;
}

.typewriter {
    position: relative;
    width: max-content;
    font-size: 2.4rem;
}

.typewriter::before,
.typewriter::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.typewriter::before {
    background-color: white;
    animation: typewriter var(--typewriterSpeed) steps(var(--nbrLetter)) 1s forwards;
}

.typewriter::after {
    width: 0.125em;
    background: black;
    animation: typewriter var(--typewriterSpeed) steps(var(--nbrLetter)) 1s forwards,
        blink 1s steps(var(--nbrLetter)) infinite;
}

@keyframes typewriter {
    to {
        left: 100%;
    }
}

@keyframes blink {
    0% {
        opacity: 100%;
    }

    50% {
        opacity: 0%;
    }
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
