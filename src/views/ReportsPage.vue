<template>
    <div class="home">
        <div class="box"></div>
        <div class="cimarron"></div>
    </div>
</template>

<style scoped>
.home {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    /* set a minimum height of 100vh */
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
</style>