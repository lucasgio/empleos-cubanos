<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-sheet
                    elevation="0"
                    height="70vh"
                    rounded="lg"
                >
                    <v-row>
                        <v-card-title class=" primary--text text-h5">Ultimas vacantes</v-card-title>
                        <v-spacer></v-spacer>
                        <v-card-subtitle class="primary--text mt-3 font-weight-bold text-uppercase">Ver todas</v-card-subtitle>
                    </v-row>
                    <v-row>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                    </v-row>

                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import HeroImage from "@/Components/UI/HeroImage";
import Cards from "@/Components/UI/Cards";

export default {
    name: "MainComponent",
    components: {Cards, HeroImage},
    data: () => ({
        professions: [
            'Programador',
            'Medico',
            'Dependiente',
            'Cocinero',
        ]
    })
}
</script>

