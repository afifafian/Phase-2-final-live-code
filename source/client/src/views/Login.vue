<template>
<div class="col-4 mt-4">
    <form v-on:submit.prevent="login" class="col bg-secondary p-3">
        <h2 style="font-weight: bolder;">Please Login First</h2><br><br>
        <div class="form-group">
            <input v-model="email" type="email" class="form-control" 
            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your email here">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <input v-model="password" type="password" class="form-control" 
            id="exampleInputPassword1" placeholder="your password here">
        </div><br>
        <button type="submit" class="btn btn-info mb-4">Login</button>
    </form>
    <div class="image">
        <img src="https://videohive.img.customer.envatousercontent.com/files/205343376/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=fe4a1e95c8646e7407ea49fdf14325f4" alt="">
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            email:'',
            password: ''
        }
    },
    methods: {
        login() {
            const data = {
                email: this.email,
                password: this.password,
            };
            this.$store.dispatch('login', data)
        }
    }
}
</script>

<style scoped>
.btn {
    font-size: 20px;
    padding-top: 10px;
    padding-left: 70px;
    padding-right: 70px;
}
.image {
    display: none;
}
</style>
