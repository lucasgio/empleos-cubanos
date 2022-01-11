<template>
    <v-app id="inspire">
        <v-app-bar
            app
            color="white"
            flat
        >

            <v-icon
                class="hidden-sm-and-up"
                @click="drawer = !drawer"
            >
                mdi-menu
            </v-icon>
            <v-app-bar-title class="hidden-sm-and-up ml-3">
                Empleos - Cubanos
            </v-app-bar-title>

            <v-container class="py-0 fill-height hidden-md-and-down">
                <v-app-bar-title>Empleos - Cubanos</v-app-bar-title>
                <v-spacer></v-spacer>
                <v-btn
                    v-for="link in links"
                    :key="link"
                    text
                >
                    {{ link }}
                </v-btn>
                <v-spacer></v-spacer>
            </v-container>

        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-main class="grey lighten-3">
            <slot></slot>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "HomeLayout",
    data() {
        return {
            drawer:false,
            group:null,
            links: [
                'Dashboard',
                'Messages',
                'Profile',
                'Updates',
            ],
        }
    }
}
</script>

<style scoped>

</style>
