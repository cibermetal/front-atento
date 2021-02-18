<template>
    <div class="vue-template">
        <form id="entrada"  @submit.prevent="checkForm"  method="post">
            <div  align="center">
                <h1>Oficina Virtual</h1> 
            </div>
            <p v-if="errors.length"> 
                <b>Por favor, corrija el / (los) siguiente(s) error(es):</b>
                <ul>
                    <li v-for="erro in errors" v-bind:key="erro">
                        <p class="alert alert-danger">{{ erro }}</p>
                    </li>
                </ul>
            </p>
            <p v-if="error.length">
                {{ error }}
            </p>

            <div class="form-group">
                <label>Dirección de correo</label>
                <input type="email" class="form-control form-control-lg" v-model="email" placeholder="tu-correo@correo.com"/>
            </div>
            <div class="form-group">
                <label>Clave</label>
                <input type="password" class="form-control form-control-lg" v-model="password"/>
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Entrar</button>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Olvidó su password ?</router-link>
            </p>
            <div class="social-icons">
                <ul>
                <li><a href="#"><i class="fa fa-google"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
            <hr>
        </form>
   </div>
</template>

<script>
    export default {
        name: "entrada",
        data() {
            return {
                errors: [],
                error: '',
                email: null,
                password: null,
            }
        },
        methods: {
            checkForm: function(e) {
                if(this.email && this.password) {                                      
                    this.$store
                        .dispatch("retrieveToken", {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {
                        alert(response);                   
                        this.$router.push({ name: "dashboard" });
                    })                    
                }
                this.errors = [];
                if(!this.email){
                    this.errors.push('El email es obligatorio.');
                }
                if(!this.password){
                    this.errors.push('El password es obligatorio');
                }
                e.preventDefault();
            },
        }
    } 
</script>