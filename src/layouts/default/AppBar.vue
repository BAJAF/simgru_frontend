<template>
  <v-app-bar class="appbar-simgru" style="background: #00ab5f; color: #ffffff">
    <v-app-bar-nav-icon>
      <v-icon style="color: #ffffff" icon="mdi-human-greeting"></v-icon>
    </v-app-bar-nav-icon>

    <v-app-bar-title> Bienvenido </v-app-bar-title>

    <template v-slot:append>
      <p v-if="isAuth">Hola, {{ userName }}</p>
      <v-btn icon="mdi-logout" @click="handleSignOut" v-if="isAuth"> </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "@/router";

const isAuth = ref(false);
const userName = ref("");

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isAuth.value = true;
      userName.value = user.displayName;
    } else {
      isAuth.value = false;
      userName.value = "";
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
    console.log("User signed out.");
  });
};
</script>

<style scoped></style>
