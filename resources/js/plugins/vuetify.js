import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#5243C2',
                secondary: '#016DF7',
                accent: '#FF8CA4',
                error: '#FE612E',
            },
        },
    },
})
