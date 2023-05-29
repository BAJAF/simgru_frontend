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

<script>
export default {
  name: "CourseInfoCard",
  props: ["title", "description", "alumnos", "link"],
  methods: {
    btnHandler() {
      window.open(this.link);
    },
  },
};
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
  color: rgb(73, 78, 74);
}

.vbutton {
  background-color: white;
  border-radius: 15px;
  width: 170px;
}
</style>
