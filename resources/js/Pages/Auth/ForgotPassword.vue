<template>
    <GuestLayout>
        <v-container class="fill-height">
            <v-row align-center justify-center>
                <v-col cols="12">
                    <v-card width="750" height="auto" class="mx-auto rounded-lg" elevation="10">
                        <v-row>
                            <v-col cols="6" class="deep-purple darken-4 rounded-lg">
                            </v-col>
                            <v-col cols="6">
                                <v-card-title class="subtitle-1 text-center deep-purple--text font-weight-bold">Empleos Cubanos</v-card-title>
                                <v-card-subtitle class="subtitle-2 deep-purple--text">Recuperación de la contraseña</v-card-subtitle>
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
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                class="deep-purple darken-4 white--text pa-3"
                                                rounded
                                                small
                                                type="submit"
                                                :loading="form.processing"
                                            >
                                                Comprobar correo electronico
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
        props: {
            status: String
        },

        data() {
            return {
                form: this.$inertia.form({
                    email: ''
                })
            }
        },

        methods: {
            submit() {
                this.form.post(this.route('password.email'))
            }
        }
    }
</script>
