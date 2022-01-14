<template>
    <v-app id="inspire">
        <v-app-bar
            app
            color="white"
            flat
        >



            <v-tabs
                centered
                class="ml-n9"
                color="grey darken-1"
            >
                <v-tab
                    v-for="link in links"
                    :key="link"
                >
                    {{ link }}
                </v-tab>
            </v-tabs>

            <v-menu
                bottom
                left
                rounded-lg
                offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-avatar

                        color="grey darken-1 shrink"
                        size="32"
                        v-bind="attrs"
                        v-on="on"
                    ></v-avatar>
                </template>

                <v-list class="pa-5">
                    <v-list-item link>
                        <v-list-item-title class="text-capitalize">Ajustes</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-avatar><v-icon>mdi-exit-to-app</v-icon></v-list-item-avatar>
                        <v-list-item-subtitle><v-btn text x-small @click="logout">Cerrar sesion</v-btn></v-list-item-subtitle>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    <slot></slot>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        links: [
            'Perfil',
            'Vacantes Aplicadas',
            'Vacantes con tu perfil',
        ],
    }),
    methods:{
        logout() {
            this.$inertia.visit('logout',{method:'post'})
        }
    }
}
</script>

<style scoped>

</style>
