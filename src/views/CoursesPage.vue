<template>
    <h1>Cursos que administras:</h1>

</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { ref } from 'vue';
import { useAppStore } from '@/store/app';

const jwtStore = useAppStore()

function getUserCourses(jwt) {
  axios.get('http://localhost:8000/courses/'+jwt+'/')
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.error(error);
    });
}

</script>