<template>
  <h2>Sign In</h2>
  <form @submit.prevent="signin">
    <input type="email" placeholder="Enter Your Email Address" class="form-control" v-model="email">
    <input type="password" placeholder="Password" class="form-control" v-model="password">
    <div class="d-grid gap-2">
        <button class="btn btn-dark">Sign In</button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {

    setup() {

        let email = ref("");
        let password = ref("");

        let signin = () => {
            console.log(email.value,password.value)
        }

        return {
            email,password,signin
        }
    }

}
</script>

<style>

</style>