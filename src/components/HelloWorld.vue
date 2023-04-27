<template>
  <div>
    <button @click="onClickLogin">Login with Google</button>
  </div>
</template>

<script>
import { gapi } from "https://apis.google.com/js/api.js";

export default {
  name: "LoginButton",
  methods: {
    onClickLogin() {
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then((response) => {
          const { tokenObj } = response;
          // you can use the tokenObj here to call Google API
          console.log(tokenObj);
        });
    },
  },
};
</script>
