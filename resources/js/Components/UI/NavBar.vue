<template>
    <div>
        <v-app-bar
            app
            color="transparent"
            flat
            hide-on-scroll
        >

            <v-icon
                class="hidden-sm-and-up"
                @click="drawer = !drawer"
            >
                mdi-menu
            </v-icon>
            <v-app-bar-title class="hidden-sm-and-up ml-3 deep-purple--text font-weight-bold">
                Empleos - Cubanos
            </v-app-bar-title>

            <v-container class="py-0 fill-height hidden-md-and-down">
                <v-app-bar-title class="white--text font-weight-bold">EMPLEOS CUBANOS</v-app-bar-title>
                <v-spacer></v-spacer>
                <v-btn
                    v-for="link in links"
                    :key="link"
                    text
                    class="white--text"
                >
                    {{ link }}
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn
                    v-for="item in button"
                    rounded
                    text
                    depressed
                    class="white--text"
                    :href="item.href"
                >
                    {{ item.name }}
                </v-btn>
            </v-container>
        </v-app-bar>
        <!-- Menu mobile responsive -->
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
                    <v-list-item v-for="(item,i) in linksResponsive" :key="i"  >
                        <v-list-item-icon>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <!-- End mobile responsive -->
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data: () => ({
        drawer:false,
        group:null,
        links: [
            'Sobre Empleos cubanos',
            'Vacantes',
            'Ayuda',
            'Contacto',
        ],
        linksResponsive:[
            {name:'Sobre Empleos cubanos',icon:'mdi-information'},
            {name:'Vacantes',icon:'mdi-newspaper-plus'},
            {name:'Ayuda',icon:'mdi-help'},
            {name:'Contacto',icon:'mdi-contacts'}
        ],
        button:[
            {name:'Login',href:'login'},
            {name:'Register',href:'register'}
        ]
    })
}
</script>

<style scoped>

</style>
