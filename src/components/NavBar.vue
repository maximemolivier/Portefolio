<template>
    <v-app-bar app class="navbar">
        <v-toolbar-title class="title font-weight-bold ml-10">
            BIENVENUE !
        </v-toolbar-title>
        <template v-slot:append>
            <v-hover v-slot="{ isHovering, props }">
                <v-btn v-bind="props" :elevation="isHovering ? 24 : 6" class="btn mr-10 " color="var(--background)">
                    Me Contacter
                </v-btn>
            </v-hover>
        </template>
    </v-app-bar>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Karla:ital,wght@0,500;1,600&display=swap');

.navbar {
    font-family: 'Karla', sans-serif;
}


.title {
    color: var(--text);
    font-size: 2.3rem;
    font-style: italic;
}

.btn {
    background-color:var(--primaryColor);
    font-style: italic;
}
</style>