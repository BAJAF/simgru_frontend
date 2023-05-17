<template>
  <div class="home">
    <div class="box"></div>
    <div class="cimarron"></div>

    <div class="columns">
      <div class="column">
        <router-link to="/cursos" class="botonDash">Cursos</router-link>
      </div>
      <div class="column">
        <router-link to="/reportes" class="botonDash">Reportes</router-link>
      </div>
      <div class="column">
        <router-link to="/codigos" class="botonDash"
          >Pagina de Codigos</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background: #00723f;
  mix-blend-mode: normal;
  z-index: 0;
}

.box {
  position: fixed;
  top: 0;
  right: 0;
  content: "";
  height: 100%;
  border-bottom: 90.5vh solid #febe10;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
}

.column {
  width: 100%;
}

.botonDash {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #ffffff;
  border-radius: 0px 30px 0px 30px;
  opacity: 80%;
  font-size: 20px;
  font-weight: bold;
  color: #00723f;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  width: 70%;
  margin: 10vw auto;
}

@media (max-width: 768px) {
  /* Agrega estilos responsivos según sea necesario */
}
</style>
