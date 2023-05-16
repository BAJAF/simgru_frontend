<template>
  <div class="home">
    <div class="box"></div>
    <div class="cimarron"></div>
    <div class="columns">
      <div class="column">
        <CodeCard
          title="Atributos"
          description="Descripcion de Atributos..."
        ></CodeCard>
        <CodeCard
          title="Criterios"
          description="Descripcion de Criterios..."
        ></CodeCard>
        <CodeCard
          title="Indicadores"
          description="Descripcion de Indicadores..."
        ></CodeCard>
      </div>
      <div class="column">
        <CopyCard
          title="Codigo"
          description="Descripcion de Codigo..."
        ></CopyCard>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useAppStore } from "@/store/app";
import CodeCard from "@/components/CodeCard.vue";
import CopyCard from "@/components/CopyCard.vue";
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
.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.column {
  width: 100%;
}

@media (max-width: 768px) {
  /* Add any responsive styles as needed */
}
</style>
