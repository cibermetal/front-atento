<template>
    <div id='muestraBoton'>
        <button class="btn btn-primary" v-if="token" v-on:click="logout"> Salir</button>
        <button class="btn btn-primary" v-else> Adelante</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            token: localStorage.getItem('access_token')
        }
    },
    methods: {
        logout(){
            localStorage.removeItem('access_token', 'usuario')
            this.$router.push({ name: "login" })
        }
    },
}
</script>