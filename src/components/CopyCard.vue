<template>
  <div class="cardContainer">
    <div class="title-container">
      <h3 class="card-title">{{ title }}</h3>
      <v-icon class="icon-container" icon="mdi-content-copy"></v-icon>
    </div>
    <hr class="card-line" />
    <p class="card-description">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const selectedItem = ref(null);

const props = defineProps({
  title: String,
  description: String,
  showIcon: {
    type: Boolean,
    default: false,
  },
  showSelector: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.cardContainer {
  position: relative;
  width: 50%;
  text-align: center;
  background-color: rgba(237, 237, 237, 0.8);
  margin: 3% auto 3% auto;
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.icon-container {
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px;
  font-size: 24px;
}

.card-line {
  border: none;
  border-top: 1px solid #000;
  opacity: 60%;
  margin: 10px auto;
  width: 50%;
}

.card-description {
  font-size: 14px;
  margin-bottom: 10px;
}

.v-select {
  margin: 30px auto;
  width: 50%;
  align-items: center;
}
</style>
