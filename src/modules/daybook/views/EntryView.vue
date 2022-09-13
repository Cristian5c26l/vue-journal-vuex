<template>
    <div class="entry-title d-flex justify-content-between p-2">

        <div>
            <span class="text-success fs-3 fw-bold"></span>
            <span class="mx-1 fs-3">Julio</span>
            <span class="mx-2 fs-4 fw-light">2021</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-thrash-alt"></i>
            </button>

            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>

    <hr />
    <div class="d-flex flex-column px-3 h-75">
        <textarea
        placeholder="¿Qué sucedió hoy?"
        ></textarea>
    </div>

    <Fab :icon="iconSelected"/>

    <img src="https://www.nationalgeographic.com.es/medio/2021/08/18/varios-corredores-atraviesan-varios-pequenos-lagos-cerca-de-courmayeur-italia_e009cbf3_800x800.jpg" 
         alt="Entry Picture" 
         class="img-thumbnail"
    />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    props: {
        id: {// propiedad id viene desde /* el index.js, en path: ':id', name: 'entry'  */
            type: Number,
            required: true
        }
    },
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    },

    computed: {
        iconSelected(){
            return `fa fa-2x ${ (this.id) ? 'fa-save' : 'fa-plus' }`// aunque bastaria con <Fab icon="fa-save"/>, y pongo ese icon porque tras un EntryView, de cajon sabemos que se va a editar para guardar, por lo tanto, no es tan necesario recuperar desde el lado del index.js la prop id, pero es un buen ejercicio hacerlo
        }
    }
    // created() {// checar si si se recibe el parametro id de /daybook/10 (recibido aqui como propiedad). Esto se ve en router.js, de alguna manera lo valida y lo envia como propiedad a este componente EntryView
    //     console.log('EntryView... ', this.id)
    // }
    
}
</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2)

}


</style>