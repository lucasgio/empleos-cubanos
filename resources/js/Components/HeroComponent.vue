<template>
 <v-container class="fill-height">
     <v-row>
         <v-col cols="6" lg="6" sm="12">
            <v-card
             width="auto"
             color="transparent"
             flat
             class="pa-14"
            >
             <v-row>
                 <v-col lg="8" sm="12">
                     <v-card-title class="white--text  text-lg-h6 font-weight-bold text-uppercase">Encuentra tu empleo ideal</v-card-title>
                     <v-form @submit.prevent="submit">
                         <v-autocomplete
                           background-color="white"
                           rounded
                           label="Profesion"
                           filled
                           :items="professions"
                         />
                         <v-autocomplete
                           background-color="white"
                           rounded
                           label="Provincia"
                           filled
                           :items="province"
                         />
                         <v-card-actions>
                             <v-spacer></v-spacer>
                             <v-btn class="primary-text pa-5" rounded>
                               <v-icon>mdi-magnify</v-icon>
                               Buscar
                             </v-btn>
                         </v-card-actions>
                     </v-form>
                 </v-col>
             </v-row>

            </v-card>
         </v-col>
         <v-col cols="6" lg="6"sm="12">
             <HeroImage class="mx-auto"/>
         </v-col>
     </v-row>
 </v-container>
</template>

<script>
import HeroImage from "@/Components/UI/HeroImage";


export default {
    name: "HeroComponent",
    components:{HeroImage},
    data: () => ({
        professions:[
            'Programador',
            'Medico',
            'Dependiente',
            'Cocinero',
        ],
        province:[
            'Pinar del Rio',
            'La Habana',
            'Matanza',
            'Cienfuego',
            'Santic Spiritus',
            'Villa Clara',
            'Ciego de Avila',
            'Las Tunas',
            'Holguin',
            'Granma',
            'Santiago de Cuba',
            'Guantanamo',
            'Isla de la Juventud',
        ]
    })
}
</script>

<style scoped>

</style>
