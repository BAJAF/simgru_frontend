<template>
  <v-app-bar class="appbar-simgru" style="background: #00ab5f; color: #ffffff">
    <v-app-bar-nav-icon>
      <v-icon :style="{ color: iconColor }" :icon="icon"></v-icon>
    </v-app-bar-nav-icon>

    <v-app-bar-title @click="redirectToDashboard">
      {{ pageTitle }}
    </v-app-bar-title>

    <template v-slot:append>
      <p v-if="isAuth">Hola, {{ userName }}</p>
      <v-btn icon="mdi-logout" @click="handleSignOut" v-if="isAuth"> </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
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

const redirectToDashboard = () => {
  if (isAuth.value) {
    router.push("/dashboard");
  }
};

const currentRoutePath = computed(() => {
  return router.currentRoute.value.path;
});

const isCursosRoute = computed(() => {
  return /^\/?cursos(\/.*)?$/.test(currentRoutePath.value);
});

const isCodigosRoute = computed(() => {
  return /^\/?codigos(\/.*)?$/.test(currentRoutePath.value);
});

const isDashboardRoute = computed(() => {
  return /^\/?dashboard(\/.*)?$/.test(currentRoutePath.value);
});

const isInfoRoute = computed(() => {
  return /^\/?informacion(\/.*)?$/.test(currentRoutePath.value);
});

const isReportsRoute = computed(() => {
  return /^\/?reportes(\/.*)?$/.test(currentRoutePath.value);
});

const pageTitle = computed(() => {
  if (isCursosRoute.value) {
    return "Cursos";
  } else if (isCodigosRoute.value) {
    return "Codigos";
  } else if (isDashboardRoute.value) {
    return "Dashboard";
  } else if (isInfoRoute.value) {
    return "Información del curso";
  }else if (isReportsRoute.value) {
    return "Reportes generados";
  } else {
    return "Bienvenido";
  }
});

const icon = computed(() => {
  if (isCursosRoute.value || isInfoRoute.value) {
    return "mdi-google-classroom";
  } else if (isCodigosRoute.value || isReportsRoute.value) {
    return "mdi-code-tags";
  } else if (isDashboardRoute.value) {
    return "mdi-view-dashboard";
  } else {
    return "mdi-human-greeting";
  }
});

const iconColor = computed(() => {
  return isCursosRoute.value ? "#ffffff" : "#ffffff";
});
</script>

<style scoped></style>
