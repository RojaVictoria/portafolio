<template>
    <v-container class="mt-5 mb-15">
        <v-row justify="center" class="mt-10 mb-5">
            <v-col sm="8" md="6">
                <v-img :contain="true" src="../../assets/About.png"></v-img>
            </v-col>
            <v-col sm="12" md="6" class="pl-10">
                <div class="lines">
                    <h2 class="pb-2">Sobre Mí</h2>
                    <p>¡Hola! Mi nombre es Victoria, soy Traductora y Desarrolladora Front End. Mi interés por el desarrollo surgió por el deseo de crear cosas desde cero y mi pasión por aprender cosas nuevas.</p>
                    <p>Como profesional, mi prioridad es entregar resultados de calidad, siempre manteniendo el estilo. Como una persona autónoma, curiosa y proactiva, estoy comprometida a seguir aprediendo y a utilizar las mejores prácticas de desarrollo.</p>
                    <p>Tecnologías que manejo actualmente:</p>
                    <v-row>
                        <v-col xs="3">
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JAVASCRIPT</li>
                            </ul>
                        </v-col>
                        <v-col xs="3">
                            <ul>
                                <li>VUE</li>
                                <li>VUETIFY</li>
                                <li>BOOTSTRAP</li>
                            </ul>
                        </v-col>
                        <v-col xs="3">
                            <ul>
                                <li>SASS/SCSS</li>
                                <li>REST API</li>
                                <li>GITHUB</li>
                            </ul>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "AboutSection",
}
</script>

<style scoped>
p {
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
}
h2 {
    font-family: 'Cinzel', serif;
    font-size: 40px;
}
.lines {
    line-height: 2;
}
</style>