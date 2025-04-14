<template>
  <div class="b_load">
    <span class="loader"></span>
  </div>
</template>

<style>
.b_load {
    position: fixed;
    display: flex;
    inset: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);;
    z-index: 10;
}
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    z-index: 11;
    margin: auto;
    position: relative;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
</style>