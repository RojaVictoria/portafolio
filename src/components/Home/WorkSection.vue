<template>
    <v-container class="mt-5 mb-15">
        <div class="lines">
            <h2 class="text-center mt-10">Proyectos</h2>

            <div v-for="project in $store.state.projects.projects" :key="project.id">
                <h3 class="mt-10 mb-2 pink--text">{{ project.name }}</h3>
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-carousel
                        cycle
                        height="550"
                        interval="4500"
                        hide-delimiters
                        :show-arrows="false"
                        class="elevation-9"
                        >
                            <v-carousel-item v-for="img in project.img" :key="img.id" :src="img" elevation="15">  
                            </v-carousel-item>

                            <v-fade-transition origin="center">
                                <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="#000000"
                                    opacity="0.8"
                                    z-index="1"
                                >
                                    <div class="white--text ma-10">
                                        <p>{{ project.desc }}</p>
                                        <v-chip class="my-2 mr-2" color=pink label text-color="white"
                                        v-for="tech in project.tech" :key="tech.id"
                                        >
                                            {{ tech }}
                                        </v-chip>
                                        <p>Visitar:
                                            <v-btn icon target="_blank" :href=project.github>
                                                <v-icon size="24px">mdi-github</v-icon>
                                            </v-btn>
                                            <v-btn icon v-if="project.url !== null" target="_blank" :href=project.url>
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
    props: {
        projects: { type: Object, required: true }
    },
}
</script>

<style scoped>
.lines {
    line-height: 2;
}
.slide-fade-enter-active, .slide-fade-leave-active {
    transition: 5s ease-in-out;
} 
h2 {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
}

h2:before, h2:after {
    content: '';
    border-top: 4px solid;
    margin: 0 20px 0 0;
    flex: 1 0 20px;
    color: #E91E63;
}

h2:after {
    margin: 0 0 0 20px;
}

</style>