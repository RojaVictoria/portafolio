<template>
    <v-footer
        color="pink"
        class="mt-15"
        app
        absolute
    >
        <v-row
        justify="center"
        no-gutters
        >
            <v-col
                class="text-center white--text py-1"
                cols="12"
            >
                <p class="my-1">© {{ new Date().getFullYear() }} - Diseñado y creado por Victoria Rojas
                  <v-btn
                    target="_blank" 
                    href="https://github.com/RojaVictoria/portafolio"
                    class="white--text pb-1"
                    icon
                    >
                    <v-icon size="24px">
                        mdi-github
                    </v-icon>
                  </v-btn>
                </p>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>
<style>
p {
    font-size: 14px;
}
</style>