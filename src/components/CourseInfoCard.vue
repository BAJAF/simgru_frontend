<template>
  <div class="card_info">
    <div class="card_title">
      <h3 class="class_name">{{ title }}</h3>
      <h5 class="alumnos">Alumnos: {{ alumnos }}</h5>
    </div>
    <div class="description_card">
      <p class="description">{{ description }}</p>
      <v-btn @click="btnHandler" class="vbutton">Ver en Classroom</v-btn>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getCourseInformation } from "../plugins/modulobackend.js"

const route = useRoute();
const selectedItem = ref(null);
const courseInformation = ref({});

onMounted(() => {
  getCourseInformation(route.params.courseId, courseInformation);
});

const btnHandler = () => {
  window.open(this.link);
};

const props = defineProps({
  title: String,
  description: String,
  alumnos: Number,
});
</script>

<style>
.card_info {
  width: 78%;
  text-align: justify;
  position: absolute;
  background-color: transparent;
  left: 3%;
  margin: 2% auto 1% auto;
  overflow: hidden;
}

.card_title {
  display: flex;
  justify-content: space-between;
}

.class_name {
  font-size: 20px;
  font-weight: bolder;
  text-align: left;
}

.description_card {
  display: flex;
  justify-content: space-between;
}

.description {
  text-align: left;
}

.alumnos {
  font-size: 18px;
  margin: 1%;
  text-align: right;
  font-weight: 500;
  opacity: 70%;
  color: rgb(129, 138, 132);
}

.vbutton {
  background-color: white;
  border-radius: 15px;
  width: 170px;
}
</style>
