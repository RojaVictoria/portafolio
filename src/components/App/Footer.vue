<template>
    <v-footer
        color="#EF8E95"
        class="mt-15"
        app
        absolute
    >
        <v-row
        justify="center"
        no-gutters
        >
            <v-col
                class="#EF8E95 text-center white--text pt-2"
                cols="12"
            >
                <p class="my-1">Creado y Diseñado por Victoria Rojas</p>
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    target="_blank" 
                    :href=icon.link
                    class="mb-2 white--text"
                    icon
                    >
                    <v-icon size="24px">
                        {{ icon.icon }}
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
  export default {
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