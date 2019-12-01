<template>
  <div class="hello">
    Hello world
  </div>
</template>

<style>
.hello {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 245px;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}
</style>
