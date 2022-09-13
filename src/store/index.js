import { createStore } from 'vuex'

import journal from '../modules/daybook/store/journal'// /journal/index.js... importar el objeto que hay en index.js de la ruta especificada

const store = createStore({
    //journal//journal: journal
    modules: {
        journal
    }
})


export default store