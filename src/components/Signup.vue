<template>
    <div class="vue-tempalte">
        <form>
            <h3>Registro</h3>

            <div class="form-group">
                <label>Nombre </label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Dirección de correo </label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Clave</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Registrarse</button>

            <p class="forgot-password text-right">
                Ya estoy registrado 
                <router-link :to="{name: 'login'}">Entrar?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>