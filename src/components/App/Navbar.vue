<template>
    <div>
        <v-app-bar color="#EF8E95" dark fixed>
            <router-link to="/">
                <img :src="require('../../assets/Logo.png')" height="40" class="pl-5 pt-1" @click="$vuetify.goTo('#home', easeInOutQuint)">
            </router-link>
            <v-spacer></v-spacer>
            <v-col class="d-none d-md-flex mr-2" cols="9">
                <v-row justify="end">
                    <v-btn link text v-for="link in links" :key="link.text"  @click="$vuetify.goTo(link.to, easeInOutQuint)">
                    {{ link.text }}
                    </v-btn>
                    <v-btn target="_blank" href="./curriculum.pdf" outlined color="white">CURRICULUM</v-btn>
                </v-row>
            </v-col>
            <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = true"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" right fixed temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="pink--text text--lighten-3">
                    <v-list-item v-for="link in links" :key="link.text" router @click="$vuetify.goTo(link.to, easeInOutQuint)">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
        links: [
            {
                text: "SOBRE MÍ",
                to: "#about",
            },
                        {
                text: "PROYECTOS",
                to: "#work",
            },
            {
                text: "CONTACTO",
                to: "#contact",
            },
        ],
    }),
}
</script>