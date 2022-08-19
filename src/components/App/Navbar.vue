<template>
    <div>
        <v-app-bar color="white" elevate-on-scroll fixed>
            <router-link to="/" class="ma-0 ma-md-10">
                <img :src="require('../../assets/logo.png')" height="40" class="pl-5 pt-1" @click="$vuetify.goTo('#home', easeInOutQuint)">
            </router-link>
            <v-spacer></v-spacer>
            <v-col class="d-none d-md-flex ma-0 ma-md-10" cols="9">
                <v-row justify="end">
                    <v-btn-toggle color="pink" group>
                        <v-btn class="lower" plain link text v-for="link in links" :key="link.text"  @click="$vuetify.goTo(link.to, easeInOutQuint)">
                            <v-icon left>
                            {{ link.icon }}
                            </v-icon>
                        {{ link.text }}
                        </v-btn>
                    </v-btn-toggle>
                </v-row>
            </v-col>
            <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = true"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" right fixed temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="pink--text">
                    <v-list-item v-for="link in links" :key="link.text" router @click="$vuetify.goTo(link.to, easeInOutQuint)">
                        <v-list-item-title>
                            <v-icon left>
                            {{ link.icon }}
                            </v-icon>
                        {{ link.text }}
                        </v-list-item-title>
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
                text: "Sobre Mí",
                to: "#about",
                icon: "mdi-card-account-details-outline",
            },
                        {
                text: "Proyectos",
                to: "#work",
                icon: "mdi-console",
            },
            {
                text: "Contacto",
                to: "#contact",
                icon: "mdi-email-open-outline",
            },
        ],
    }),
}
</script>
<style scoped>
.lower {
    text-transform: unset !important;
}
</style>