<template>
  <div class="home">
    <div class="box"></div>
    <div class="cimarron"></div>
    <div class="cardCourse">
      <div class="cardContainer" v-for="c in cursos" :key="c.id">
        <CourseCard :title="c.name" :subtitle="c.description" :link="c.link" :courseId="c.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useAppStore } from "@/store/app";
import CourseCard from "@/components/CourseCard.vue";
import * as moduloBackEnd from './../plugins/modulobackend.js';

const jwtStore = useAppStore();
const cursos = ref([]);

onMounted(() => {
  moduloBackEnd.getUserCourses(cursos, jwtStore);
});
</script>

<style scoped>
.home {
  position: absolute;
  width: 100%;
  min-height: 100vh; /* set a minimum height of 100vh */
  background: #febe10;
  mix-blend-mode: normal;
  z-index: 0;
}
.CourseCard {
  position: relative;
  z-index: 1;
}

.box {
  position: fixed;
  top: 0;
  left: 0;
  content: "";
  height: 100%;
  border-bottom: 50vh solid #00723f;
  border-right: 100vw solid transparent;
  z-index: -1;
}
.cimarron {
  position: fixed;
  width: 200px;
  height: 212px;
  top: 10%;
  right: 2%;
  z-index: -2;
  background: url(../assets/Cimarron2.png);
}
</style>
