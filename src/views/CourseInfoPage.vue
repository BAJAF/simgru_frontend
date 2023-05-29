<template>
  <div class="home">
    <div class="box"></div>
    <div class="cimarron"></div>

    <template v-if="courseInformation.course">
      <div class="info">
        <CourseInfoCard
          :title="courseInformation.course.name"
          :description="courseInformation.course.descriptionHeading"
          :alumnos="courseInformation.students.students.length"
          :link="courseInformation.course.alternateLink"
        >
        </CourseInfoCard>
      </div>
    </template>

    <div class="hm_title">
      <h3 class="listado">Listado de Tareas</h3>
    </div>

    <template v-if="courseInformation.coursework">
      <div class="cards_container">
        <div
          class="column"
          v-for="c in courseInformation.coursework.courseWork"
          :key="c.id"
        >
          <HomeworkCard
            :title="c.title"
            :vencimiento="`${c.dueDate.day}/${c.dueDate.month}/${c.dueDate.year}`"
            :link="c.alternateLink"
          ></HomeworkCard>
        </div>
      </div>
    </template>

    <div class="btn_container">
      <v-btn class="btn_reportes">Generar Reportes</v-btn>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HomeworkCard from "@/components/HomeworkCard.vue";
import CourseInfoCard from "@/components/CourseInfoCard.vue";
import { getCourseInformation } from "./../plugins/modulobackend.js";
import { useRoute } from "vue-router";

const route = useRoute();
const courseInformation = ref({});

onMounted(() => {
  getCourseInformation(route.params.courseId, courseInformation);
});
</script>

<style scoped>
.home {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  /* set a minimum height of 100vh */
  background: #febe10;
  mix-blend-mode: normal;
  z-index: 0;
}

.box {
  position: fixed;
  top: 0;
  right: 0;
  content: "";
  height: 100%;
  border-bottom: 50.5vh solid #00723f;
  border-right: 100vw solid transparent;
  z-index: -1;
}

.cimarron {
  position: fixed;
  width: 200px;
  height: 212px;
  top: 15%;
  right: 2%;
  z-index: -2;
  background: url(../assets/Cimarron2.png);
}

.listado {
  font-size: 20px;
  font-weight: bolder;
  text-align: left;
}

.hm_title {
  width: 80%;
  text-align: justify;
  position: absolute;
  background-color: transparent;
  left: 3%;
  top: 13%;
  margin: 1% auto 1% auto;
  overflow: hidden;
}

.cards_container {
  grid-gap: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 13%;
}

.btn_container {
  display: flex;
  justify-content: right;
  margin-right: 5%;
  margin-bottom: 5%;
}

.btn_reportes {
  background-color: white;
  border-radius: 30px;
  width: 200px;
  height: 60px;
}

@media (max-width: 768px) {
  /* Add any responsive styles as needed */
}
</style>
