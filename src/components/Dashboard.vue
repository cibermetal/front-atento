<template>
    <div>
        <h1>Este es el Escritorio</h1>
        <p v-if="usuario.length">
            {{ usuario }}
        </p>
        <div>
            <button v-on:click="logout" class="btn btn-primary">Logout</button>
         </div>
    </div>
</template>

<script>
export default {
    name: "dashb",
    data() {
        return {
            usuario: localStorage.getItem('usuario'),
            isLogIn: localStorage.getItem('token'),
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('access_token', 'usuario');
            this.$router.push({ name: "login" });
        }
    },   
}
</script>