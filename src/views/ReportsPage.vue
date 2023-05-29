<template>
  <div class="home">
    <div class="box"></div>
    <div class="cimarron"></div>

    <div class="courseCards">
      <ReportCard
        title="Nombre del curso"
        meta="Meta 1.1 Ejemplo de una meta"
        fecha="29/05/2023"
      ></ReportCard>
    </div>

    <div class="courseCards">
      <ReportCard
        title="Nombre del curso"
        meta="Meta 1.1 Ejemplo de una meta"
        fecha="29/05/2023"
      ></ReportCard>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ReportCard from "@/components/ReportCard.vue";
import { getCourseInformation } from "./../plugins/modulobackend.js";
import { useRoute } from "vue-router";

const route = useRoute();
const courseInformation = ref({});

onMounted(() => {
  getCourseInformation(route.params.courseId, courseInformation);
});
</script>

<style scoped>
.courseCards {
  grid-gap: 70px;
  justify-content: center;
  align-items: center;
}
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
  border-bottom: 90.5vh solid #00723f;
  border-left: 75vw solid transparent;
  z-index: -1;
}

.cimarron {
  position: fixed;
  width: 200px;
  height: 212px;
  top: 60%;
  right: 2%;
  z-index: -1;
  background: url(../assets/Cimarron2.png);
}

@media (max-width: 768px) {
  /* Add any responsive styles as needed */
}
</style>
