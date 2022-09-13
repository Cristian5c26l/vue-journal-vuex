
// este index.js se usa en el src/store/index.js (en el store global)

import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'


const myCustomModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}