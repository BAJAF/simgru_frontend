<template>
  <div class="card_container">
    <div class="center">
      <input class="checkbox" type="checkbox" id="hm_checkbox" name="hm_checkbox" />
      <h2 class="hm_title">{{ title }}</h2>
    </div>

    <div class="right_container">
      <h5 class="vencimiento">Vencimiento: {{ vencimiento }}</h5>
      <v-btn @click="btnHandler" class="btn_tarea">Ver tarea</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeworkCard",
  props: ["title", "vencimiento", "link"],
  methods: {
    btnHandler() {
      window.open(this.link);
      console.log(this.title);
    },
  },
};
</script>

<style>
.center {
  flex: 1;
  display: flex;
  align-items: center;
}

.hm_title {
  text-align: left;
  margin-left: 5%;
}

.card_container {
  width: 90%;
  height: 75px;
  background-color: rgba(237, 237, 237, 0.8);
  margin: 1% auto 1.5% auto;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
}

.checkbox {
  margin-left: 5%;
}

.vencimiento {
  font-size: 15px;
  text-align: right;
  font-weight: 400;
  opacity: 70%;
  color: rgb(129, 138, 132);
}

.right_container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 2%;
  margin-top: 0.5%;
}

.btn_tarea {
  background-color: white;
  border-radius: 30px;
  width: 135px;
  height: 100px;
}
</style>
