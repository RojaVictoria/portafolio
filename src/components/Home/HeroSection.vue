<template>
    <v-container fill-height class="mt-16 mt-md-10 py-5">
        <v-row align="center" class="mb-16 mb-md-10">
            <v-col sm="12" md="6">
                <div>
                    <p class="pink--text">Hola, mi nombre es</p>
                    <h1>Victoria Rojas</h1>
                    <h2>FullStack Developer</h2>
                    <p class="py-3">Titulada en Traducción Inglés-Español y Desarrolladora FullStack Python con conocimientos en Vue.js. Actualmente, mi interés está en desempeñarme como desarrolladora de aplicaciones web, con el compromiso de seguir aprendiendo.</p>
                    <div>
                        <v-btn tile color="pink" dark class="lower" target="_blank" href="./curriculum.pdf">Curriculum</v-btn>
                    </div>
                </div>
            </v-col>
            <v-col sm="8" md="6">
                <v-img :contain="true" src="../../assets/Banner.png"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "HeroSection",
}
</script>

<style scoped>
.lower {
    text-transform: unset !important;
}
</style>