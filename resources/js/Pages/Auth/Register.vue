<template>
   <GuestLayout>
       <v-container class="fill-height">
           <v-row align-center justify-center>
               <v-col cols="12">
                   <v-card width="700" height="auto" class="mx-auto rounded-lg" elevation="10">
                       <v-row>
                           <v-col cols="6" class="deep-purple darken-4 rounded-lg">
                           </v-col>
                           <v-col cols="6">
                               <v-card-title class="subtitle-1 text-center deep-purple--text font-weight-bold">Bienvenido a Empleos Cubanos</v-card-title>
                               <v-card-subtitle class="subtitle-2 deep-purple--text">Registre una nueva cuenta</v-card-subtitle>
                               <v-card-text class="pa-2">
                                   <v-form @submit.prevent="submit">
                                       <v-text-field
                                           v-model="form.email"
                                           value="Email"
                                           type="email"
                                           rounded
                                           label="Correo electronico"
                                           prepend-inner-icon="mdi-email"
                                           flat
                                           required
                                           outlined
                                           placeholder="juanperez@gmail.com"
                                           dense
                                           filled
                                       />
                                       <v-text-field
                                           v-model="form.name"
                                           value="First Name"
                                           type="text"
                                           label="Nombre y apellidos"
                                           prepend-inner-icon="mdi-account"
                                           flat
                                           rounded
                                           required
                                           outlined
                                           placeholder="Juan Perez"
                                           dense
                                           filled
                                       />
                                       <v-text-field
                                           v-model="form.password"
                                           value="Password"
                                           type="password"
                                           label="Contraseña"
                                           prepend-inner-icon="mdi-lock"
                                           flat
                                           rounded
                                           required
                                           outlined
                                           placeholder="**********"
                                           dense
                                           filled
                                       />
                                       <v-text-field
                                           v-model="form.password_confirmation"
                                           value="Password Confirmation"
                                           type="password"
                                           label="Confirme la contraseña"
                                           prepend-inner-icon="mdi-lock"
                                           flat
                                           rounded
                                           required
                                           outlined
                                           placeholder="**********"
                                           dense
                                           filled
                                       />
                                       <v-card-actions>
                                           <v-btn
                                               text
                                               rounded
                                               small
                                               plain
                                               class="deep-purple--text font-weight-bold"
                                               :href="route('login')"
                                           >
                                               Ya tengo una cuenta
                                           </v-btn>
                                           <v-spacer></v-spacer>
                                           <v-btn
                                               class="deep-purple darken-4 white--text pa-3"
                                               rounded
                                               small
                                               type="submit"
                                               :loading="form.processing"
                                           >
                                               Registrarse
                                           </v-btn>
                                       </v-card-actions>
                                   </v-form>
                               </v-card-text>
                           </v-col>
                       </v-row>

                   </v-card>
               </v-col>
           </v-row>
       </v-container>
   </GuestLayout>


</template>

<script>
    import GuestLayout from "@/Layouts/GuestLayout";

    export default {
        components: {GuestLayout},
        data() {
            return {
                form: this.$inertia.form({
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    terms: false,
                })
            }
        },

        methods: {
            submit() {
                this.form.post(this.route('register'))
            }
        }
    }
</script>
