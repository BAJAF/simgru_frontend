<template>
  <div class="hm_container">
    <h3 class="hm_name">Meta 1.1 Ejemplo de meta</h3>

    <div class="right_container">
      <h5 class="hm_date">Fecha de elaboración 29/05/2023</h5>
      <div class="icons">
        <v-icon icon="mdi-pencil-outline"></v-icon>
        <v-icon icon="mdi-delete-empty-outline"></v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmReportCard",
  props: ["title", "fecha"],
  methods: {},
};
</script>

<style>
.hm_name {
  margin-left: 3%;
  text-align: left;
}

.hm_date {
  margin-left: 3%;
  margin-right: 2%;
  text-align: right;
  font-weight: 400;
}

.icons {
  margin-left: 5px;
  margin-right: 12px;
}

.right_container {
  align-items: center;
  display: flex;
  justify-content: space-around;
}

.hm_container {
  width: 70%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(237, 237, 237, 0.8);
  margin: 3% auto 3% auto;
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
</style>
