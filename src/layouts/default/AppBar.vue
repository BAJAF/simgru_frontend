<template>
  <v-app-bar :elevation="2">

    <v-app-bar-nav-icon>
      <v-icon icon="mdi-view-week"></v-icon>
    </v-app-bar-nav-icon>

    <v-app-bar-title>
      SIMGRU
    </v-app-bar-title>

    <template v-slot:append>
      <p v-if="isAuth">Hola, {{ userName }}</p>
      <v-btn icon="mdi-logout" @click="handleSignOut" v-if="isAuth">
      </v-btn>
    </template>

  </v-app-bar>
</template>

<script setup>
  import { onMounted, ref } from "vue"
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import router from "@/router";

  const isAuth = ref(false);
  const userName = ref("");

  let auth;
  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user) {
        isAuth.value = true;
        userName.value = user.displayName
      } else {
        isAuth.value = false;
        userName.value = ""
      }
    })
  })

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/");
      console.log("User signed out.");
    })
  }
</script>

