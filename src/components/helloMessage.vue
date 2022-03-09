<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="yellow">{{ msg }}</h1>
    <h3>
      Una vez las pruebas quedarás adicto al sabor!!
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.6rem;
  top: -10px;
  font-family: 'Fredoka One', cursive;
  line-height: 100%;
}

h3 {
  font-size: 1.2rem;
  font-family: 'Architects Daughter', cursive;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
