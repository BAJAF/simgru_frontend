<template>
  <div class="cardContainer">
    <v-icon icon="mdi-content-copy" v-if="showIcon"></v-icon>
    <h3 class="card-title">{{ title }}</h3>
    <hr class="card-line" />
    <p class="card-description">
      {{ description }}
    </p>
    <v-select
      :v-model="value"
      :items="items"
      label="Selector"
      v-if="showSelector"
      class="custom-select"
      variant="outlined"
      @update:model-value="onChange"
      :reset-on-options-change="true"
    ></v-select>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const selectedItem = ref(null);

const showIcon = ref(false);
const showSelector = ref(true);

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
  items: Array,
  onChange: Function,
  value: String
});
</script>

<style scoped>
.cardContainer {
  width: 70%;
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
  margin-bottom: 10px;
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

.custom-select {
  margin: 30px auto;
  width: 50%;
  align-items: center;
  border-radius: 10px; /* Add this line to make the corners round */
}
</style>
