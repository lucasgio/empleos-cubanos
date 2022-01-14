<template>
<!--    <jet-authentication-card>
        <template #logo>
            <jet-authentication-card-logo />
        </template>

        <jet-validation-errors class="mb-4" />

        <form @submit.prevent="submit">
            <div>
                <jet-label for="email" value="Email" />
                <jet-input id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus />
            </div>

            <div class="mt-4">
                <jet-label for="password" value="Password" />
                <jet-input id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="new-password" />
            </div>

            <div class="mt-4">
                <jet-label for="password_confirmation" value="Confirm Password" />
                <jet-input id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" required autocomplete="new-password" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Reset Password
                </jet-button>
            </div>
        </form>
    </jet-authentication-card>-->

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
                                <v-card-subtitle class="subtitle-2 deep-purple--text">Cambio de contraseña</v-card-subtitle>
                                <v-card-text class="pa-2">
                                    <v-form @submit.prevent="submit">
                                        <v-text-field
                                            v-model="form.password"
                                            value="Password"
                                            type="password"
                                            label="Nueva Contraseña"
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
                                            value="Password"
                                            type="password"
                                            label="Confirmar Contraseña"
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
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                class="deep-purple darken-4 white--text pa-3"
                                                rounded
                                                small
                                                type="submit"
                                                :loading="form.processing"
                                            >
                                                Cambiar contraseña
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
            email: String,
            token: String,
        },
        data() {
            return {
                form: this.$inertia.form({
                    token: this.token,
                    email: this.email,
                    password: '',
                    password_confirmation: '',
                })
            }
        },
        methods: {
            submit() {
                this.form.post(this.route('password.update'), {
                    onFinish: () => this.form.reset('password', 'password_confirmation'),
                })
            }
        }
    }
</script>
