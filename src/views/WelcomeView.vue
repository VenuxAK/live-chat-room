<template>
  <div class="welcome-container">
    <div v-if="toggleForm">
      <SignIn></SignIn>
      <p>Not Signup Yet? <span @click="toggleForm=!toggleForm">Sign Up Here</span></p>
    </div>
    <div v-else>
      <Signup></Signup>
      <p>Already Have an Account?<span @click="toggleForm=!toggleForm">Sign In Here</span></p>
    </div>
  </div>
</template>

<script>    
import { ref } from '@vue/reactivity'
import SignIn from '../components/SignIn'
import Signup from '../components/Signup'
export default {
  components: {
    SignIn, Signup },

  setup() {

    let toggleForm = ref(true);

    return {
      toggleForm
    }
  }
}
</script>

<style>

</style>