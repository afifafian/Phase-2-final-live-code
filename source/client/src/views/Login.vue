<template>
<div class="col-4 mt-4">
    <form v-on:submit.prevent="login">
        <h2>LOGIN</h2>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
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

<style>

</style>