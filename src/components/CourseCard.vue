<template>
  <div class="card_c">
    <v-card :title="title" :subtitle="subtitle" variant="tonal">
      <v-card-actions class="vcardbuttons">
        <v-btn @click="btnHandler" class="vbutton">Ver Curso</v-btn>
        <v-btn class="vbutton">
          <router-link
            to="/informacion/:courseId"
            class="botonDash"
            @click="goToCourseInfo"
            >Información</router-link
          >
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CourseCard",
  props: ["title", "subtitle", "text", "link", "courseId"],
  methods: {
    btnHandler() {
      window.open(this.link);
    },
    goToCourseInfo() {
      this.$router.push("/informacion/" + this.courseId + "/");
    },
  },
};
</script>

<style>
.card_c {
  width: 90%;
  text-align: center;
  background-color: rgba(237, 237, 237, 0.8);
  margin: 2% auto 1% auto;
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.vcardbuttons {
  justify-content: center;
}

.vbutton {
  background-color: white;
  border-radius: 10px;
  width: 200px;
}
</style>
