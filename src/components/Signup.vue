<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signup">
    <h5 class="text-center">
        <span v-if="error">
            <span class="text-danger">{{error}}</span>
        </span>
        <span v-if="success">
            <span class="text-success">{{success}}</span>
        </span>
    </h5>
    <input type="text" placeholder="Enter Your Name" class="form-control" v-model="username">
    <input type="email" placeholder="Enter Your Email Address" class="form-control" v-model="email">
    <input type="password" placeholder="Password" class="form-control" v-model="password">
    <div class="d-grid gap-2">
        <button class="btn btn-dark">Sign Up</button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { auth, userColRef, timestamp } from "@/firebase/config"
import { addDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword } from "firebase/auth" // Auth
export default {

    setup() {

        let username = ref("");
        let email = ref("");
        let password = ref("");

        let success = ref(null);
        let error = ref(null);
        let signup = async () => {
            try {
                let res = await createUserWithEmailAndPassword(auth, email.value, password.value);
                if(!res) {
                    throw new Error("Internal Server Error Occured! Please try again later");
                }
                // Add To Firestore Database
                let addUser = await addDoc(userColRef,{
                    username: username.value,
                    email: email.value,
                    password: password.value,
                    createdAt: timestamp
                })
                res.user.displayName = username.value;
                success.value = "Signup Successful!"
                error.value = "";
                // console.log(res.user)
            } catch(e) {
                error.value = e.message;
                success.value = null;
                // console.log(error.value)
            }
        }

        return {
            username,email,password,signup,error,success
        }
    }

}
</script>

<style>

</style>