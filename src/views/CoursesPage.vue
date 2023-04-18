<template>
    <h1>Cursos que administras:</h1>
    <div>
        <CourseCard v-for="c in cursos" :title="c.name" :subtitle="c.description" :link="c.link"/>
    </div>
    


</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useAppStore } from '@/store/app';
import CourseCard from '@/components/CourseCard.vue';

const jwtStore = useAppStore()
const cursos = ref([]);

const getUserCourses = () => {
    let jwt = jwtStore.jwt;

    const axInstance = axios.create({
      headers:{
        "Access-Control-Allow-Origin": "*"
      }
    })

    axInstance
    .get('http://localhost:8000/courses/'+jwt)
    .then(res => {
      console.log(res);
      cursos.value = res.data.courses;
    })
    .catch(error => {
      console.error(error);
    });
}

onMounted(() => {
    getUserCourses()
})

</script>