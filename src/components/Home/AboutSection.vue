<template>
    <v-container fill-height class="mt-5 mb-15">
        <v-row align="center" class="mt-5 mb-5">
            <v-col sm="8" md="6">
                <v-img :contain="true" src="../../assets/profile-pic.png"></v-img>
            </v-col>
            <v-col sm="12" md="6" class="pl-10">
                <div class="lines">
                    <h2 class="pb-2">Sobre Mí</h2>
                    <p>¡Hola! Mi nombre es Victoria, soy Traductora y desde el año 2021 comencé a aprender programación con la intención de transformar mi carrera. Mi pasión es crear cosas desde cero, cuidando los detalles y encontrando soluciones a distintos problemas.</p>
                    <p>Mi meta es seguir aprendiendo para convertirme en una profesional del área de la informática, entregar resultados de calidad y poder llevar a cabo todas las etapas del proceso de producción de una aplicación web, siempre manteniendo el estilo.</p>
                    <p>Tecnologías que manejo actualmente:</p>
                    <v-row>
                        <v-col xs="3">
                            <h5 class="pink--text">Front End</h5>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>VueJS</li>
                                <li>Vuex</li>
                            </ul>
                        </v-col>
                        <v-col xs="3">
                            <h5 class="pink--text">Back End</h5>
                            <ul>
                                <li>Python</li>
                                <li>Django</li>
                                <li>PostgreSQL</li>
                                <li>Firebase</li>
                            </ul>
                        </v-col>
                        <v-col xs="3">
                            <h5 class="pink--text">Otros</h5>
                            <ul>
                                <li>REST API</li>
                                <li>Git</li>
                                <li>SASS/SCSS</li>
                                <li>Vuetify</li>
                                <li>Bootstrap</li>
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
.lines {
    line-height: 2;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>