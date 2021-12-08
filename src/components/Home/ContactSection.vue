<template>
    <v-container class="my-10">
        <v-row justify="center" class="mt-5 mb-5">
            <v-col cols="12" md="6">
                <h2 class="pb-2">Hagamos algo genial juntos</h2>
                <p class="lines">Contáctame e iniciemos un proyecto juntos, me comunicaré contigo a la brevedad.</p>
                <p class="lines">Algunas de mis redes:
                    <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    target="_blank" 
                    :href=icon.link
                    class="mx-2"
                    icon
                    >
                        <v-icon size="40px" color="#EF8E95">
                            {{ icon.icon }}
                        </v-icon>
                    </v-btn>
                </p>
            </v-col>
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-text class="pa-8">
                            <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                            >
                                <v-text-field
                                v-model="name"
                                :rules="nameRules"
                                label="Nombre"
                                required
                                outlined
                                ></v-text-field>
                                <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="Email"
                                required
                                outlined
                                ></v-text-field>
                                <v-textarea
                                outlined
                                rows="8"
                                row-height="20"
                                label="Mensaje"
                                ></v-textarea>
                                <v-btn
                                block
                                tile
                                large
                                class="white--text"
                                color="#EF8E95"
                                @click="validate"
                                >
                                Enviar
                                </v-btn>
                            </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "ContactSection",
    data: () => ({
        icons: [
            {
                "icon": 'mdi-github',
                "link": 'https://github.com/RojaVictoria'
            },
            {
                "icon": 'mdi-linkedin',
                "link": 'https://www.linkedin.com/in/victoriarojascabrera/'
            },
        ],
    }),
}
</script>

<style scoped>
p {
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