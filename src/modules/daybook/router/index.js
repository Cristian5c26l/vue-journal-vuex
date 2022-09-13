
export default {

    name: 'daybook',
    component: () => import(/* webpackChunkName: "DayBookLayout" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',// /daybook o /daybook/
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "NoEntrySelected" */ '@/modules/daybook/views/NoEntrySelected.vue')
        },
        {
            path: ':id',// /daybook/4
            name: 'entry',
            component: () => import(/* webpackChunkName: "EntryView" */ '@/modules/daybook/views/EntryView.vue'),
            props: ( route ) => {
                console.log('daybook router.js...! ', route.params)
                const id = Number(route.params.id)
                console.log(id)
                return isNaN( id ) ? { id: 1 } : { id }
            }
        }
    ]
}