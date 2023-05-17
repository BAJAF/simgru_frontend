<template>
  <div class="home">
    <div class="box"></div>
    <div class="cimarron"></div>
    <div class="columns">
      <div class="column">
        <CodeCard
          title="Atributos"
          description="Descripcion de Atributos..."
          :items = "atributos"
          :onChange="getCDs"
        ></CodeCard>
        <CodeCard
          title="Criterios"
          description="Descripcion de Criterios..."
          :items="criterios"
          :onChange="getIs"
          v-model="criterio"
        ></CodeCard>
        <CodeCard
          title="Indicadores"
          description="Descripcion de Indicadores..."
          :items="indicadores"
          v-model="indicador"
          :onChange="createCode"
        ></CodeCard>
      </div>
      <div class="column">
        <CopyCard
          title="Codigo"
          :description="codeRef"
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

const atributos = ref([]);
const criterios = ref([]);
const indicadores = ref([]);
const codeRef = ref("");

const atributo = ref("");
const criterio = ref("");
const indicador = ref("");

let aeId = "";
let cdId = "";
let iId = "";

const getAE = () => {
  axios.get("http://localhost:8000/atributos/")
  .then((res) => {
    console.log(res.data.atributos);
    atributos.value = res.data.atributos.map(x => x.id + "-" + x.descripcion);
  }).catch((err) => {
    console.log(err);
  })
}

const getCDs = (value) => {
  indicador.value = null;
  criterio.value = null;
  aeId = value.substring(0, value.indexOf('-'))
  axios.get("http://localhost:8000/atributos/"+ aeId +"/")
  .then((res) => {
    console.log(res.data.criterios);
    criterios.value = res.data.criterios.map(x => x.id + "-" + x.descripcion);
  }).catch((err) => {
    console.log(err);
  });
}

const getIs = (value) => {
  indicador.value = null;
  cdId = value.substring(0, value.indexOf('-'));
  axios.get("http://localhost:8000/atributos/" + aeId + "/criterios/" + cdId + "/")
  .then((res) => {
    console.log(res.data.indicadores);
    indicadores.value = res.data.indicadores.map(x => x.id + "-" + x.descripcion);
  }).catch((err) => {
    console.log(err);
  });

}

const createCode = (value) => {
  iId = value.substring(0, value.indexOf('-'));

  axios.get('http://localhost:8000/code/ae/'+aeId+'/cd/'+cdId+'/i/'+iId+'/').then((res) => {
    console.log(res.data.code);
    codeRef.value = res.data.code;
  }).catch((err) => {
    console.log(err);
  });

}

getAE();

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
