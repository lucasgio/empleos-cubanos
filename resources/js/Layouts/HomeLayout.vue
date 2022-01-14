<template>
    <v-app>
        <v-sheet
        color="primary"
        height="60vh"
        >
         <NavBar/>
         <HeroComponent/>
        </v-sheet>
        <v-main class="bg-white">
            <slot></slot>
        </v-main>
    </v-app>
</template>

<script>


import NavBar from "@/Components/UI/NavBar";
import HeroComponent from "@/Components/HeroComponent";
export default {
    name: "HomeLayout",
    components: {HeroComponent, NavBar},
    data() {
        return {

        }
    }
}
</script>

