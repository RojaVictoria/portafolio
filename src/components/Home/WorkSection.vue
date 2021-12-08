<template>
    <v-container class="mt-5 mb-15">
        <div class="lines">
            <h2 class="text-center mt-10">Mi Trabajo</h2>
            <div v-for="n in 4" :key="n">
                <h3 class="mt-10 mb-2">Nombre del Proyecto</h3>
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-carousel
                        cycle
                        height="550"
                        hide-delimiters
                        :show-arrows="false"
                        >
                            <v-carousel-item
                            v-for="(slide, i) in slides"
                            :key="i"
                            >
                                <v-sheet
                                    :color="colors[i]"
                                    height="100%"
                                >
                                </v-sheet>
                            </v-carousel-item>

                            <v-fade-transition origin="center">
                                <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="#000000"
                                    opacity="0.6"
                                    z-index="1"
                                >
                                    <div class="white--text ma-10">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo perspiciatis natus magnam fugiat error placeat sequi odit, amet aperiam debitis, repellendus iusto dolorum? Itaque facere libero nisi voluptatum expedita!</p>
                                        <!-- v-for chips -->
                                        <v-chip
                                        class="my-2 mr-2"
                                        color="#EF8E95"
                                        label
                                        text-color="white"
                                        >
                                            <v-icon left>
                                                mdi-vuejs
                                            </v-icon>
                                            Vue
                                        </v-chip>
                                        <v-chip
                                        class="ma-2"
                                        color="#EF8E95"
                                        label
                                        text-color="white"
                                        >
                                            <v-icon left>
                                                mdi-vuetify
                                            </v-icon>
                                            Vuetify
                                        </v-chip>
                                        <v-chip
                                        class="ma-2"
                                        color="#EF8E95"
                                        label
                                        text-color="white"
                                        >
                                            <v-icon left>
                                                mdi-vuejs
                                            </v-icon>
                                            Vuex
                                        </v-chip>
                                        <v-chip
                                        class="ma-2"
                                        color="#EF8E95"
                                        label
                                        text-color="white"
                                        >
                                            <v-icon left>
                                                mdi-language-css3
                                            </v-icon>
                                            CSS3
                                        </v-chip>
                                        <v-chip
                                        class="ma-2"
                                        color="#EF8E95"
                                        label
                                        text-color="white"
                                        >
                                            <v-icon left>
                                                mdi-language-html5
                                            </v-icon>
                                            HTML5
                                        </v-chip>
                                        <p>Visitar:
                                            <v-btn icon>
                                                <v-icon size="24px">mdi-github</v-icon>
                                            </v-btn>
                                            <v-btn icon>
                                                <v-icon size="24px">mdi-open-in-new</v-icon>
                                            </v-btn>
                                        </p>
                                    </div>
                                </v-overlay>
                            </v-fade-transition>
                        </v-carousel>
                    </template>
                </v-hover>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "WorkSection",
    data: () => ({
        overlay: false,
        colors: [
          'pink',
          'cyan',
          'blue',
          'teal',
          'blue-grey',
        ],
        cycle: false,
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
    }),
}
</script>

<style scoped>
p {
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
}
h2 {
    font-family: 'Cinzel', serif;
    font-size: 40px;
}
h3 {
    font-family: 'Josefin Slab', serif;
    font-size: 35px;
    font-weight: 700;
    color: #373737;
}
.lines {
    line-height: 2;
}
.slide-fade-enter-active, .slide-fade-leave-active {
    transition: 5s ease-in-out;
} 
/* .v-carousel.on-hover, .overlay {
    transition: opacity .5s ease-in-out;
    opacity: 0.6;
} */

</style>