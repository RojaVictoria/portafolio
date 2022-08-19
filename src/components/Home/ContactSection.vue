<template>
    <v-container class="my-10">
        <v-row class="mt-5 mb-5">
            <v-col cols="12" md="6">
                <h2 class="pb-2">Contáctame</h2>
                <p class="lines">Envíame un mensaje y me comunicaré contigo a la brevedad.</p>
                <p class="lines">También me puedes encontrar aquí:</p>
                <div>
                    <v-icon size="30px" color="pink" class="pb-1 mr-2">mdi-github</v-icon>
                    <a href="https://github.com/RojaVictoria" target="_blank">Mi Github</a><br>
                    <v-icon size="30px" color="pink" class="pb-1 mr-2">mdi-linkedin</v-icon>
                    <a href="https://www.linkedin.com/in/victoriarojascabrera/" target="_blank">Mi Linkedin</a><br>
                    <v-icon size="30px" color="pink" class="pb-1 mr-2">mdi-email-outline</v-icon>
                    <a href="mailto:${victoria.rojascabrera@gmail.com}" target="_blank">victoria.rojascabrera@gmail.com</a>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-text class="pa-8">
                            <v-form
                            ref="form"
                            lazy-validation
                            @submit.prevent="sendEmail"
                            >
                                <v-text-field
                                v-model="name"
                                name="name"
                                :rules="nameRules"
                                label="Nombre"
                                required
                                outlined
                                ></v-text-field>
                                <v-text-field
                                v-model="email"
                                name="email"
                                :rules="emailRules"
                                label="Email"
                                required
                                outlined
                                ></v-text-field>
                                <v-textarea
                                v-model="message"
                                name="message"
                                :rules="rules"
                                required
                                outlined
                                rows="8"
                                row-height="20"
                                label="Mensaje"
                                ></v-textarea>
                                <v-btn
                                type="submit"
                                block
                                tile
                                large
                                class="white--text"
                                color="pink"
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
import emailjs from '@emailjs/browser';
export default {
    name: "ContactSection",
    data: () => ({
        name: '',
        email: '',
        message: '',
        nameRules: [
            v => !!v || 'Ingrese un nombre',
            v => (v && v.length <= 20) || 'El nombre debe tener menos de 20 caracteres',
        ],
        emailRules: [
            v => !!v || 'Ingrese un correo',
            v => /.+@.+\..+/.test(v) || 'El correo debe ser válido',
        ],
        rules: [
            v => !!v || 'Ingrese un mensaje',
        ],
    }),
    methods: {
        sendEmail(e) {
            try {
                emailjs.sendForm('service_jil1izv', 'template_pgsktes', e.target,
                'BMm8cDdmUYeMddk7f', {
                name: this.name,
                email: this.email,
                message: this.message
                })
                alert("Mensaje enviado, muchas gracias");
                this.$refs.form.resetValidation()
                this.$refs.form.reset()

            } catch(error) {
                console.log({error})
            }
        },
    }
}

</script>

<style scoped>
a {
  text-decoration: none;
  color: black;

}
a:hover {
  text-decoration: underline;
  color: #E91E63;
}
</style>