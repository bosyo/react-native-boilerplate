<template>
  <div class="card-container">
    <div v-if="index > 0" class="normal-card">
      <p class='has-text-centered is-size-5 has-text-weight-bold normal-card-text '>
        {{card.name}}
      </p>
    </div>
    <div v-else class= "is-center add-card" @click="$emit('addCard')">
      <p class="has-text-centered">
        {{card.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServersCard',
  props: ['card', 'index']
}
</script>

<style scoped>
  .card-container {
    margin-right: 10px;
    float:left;
    margin-bottom:10px;
  }
  .normal-card {
    height:200px;
    width:200px;
    border-radius: 10px !important; background: grey;
  }
  .normal-card-text {
    color:#505050;
    position: relative;
    bottom:-140px;
  }
  .add-card {
    height:200px;
    width:200px;
    border:solid grey 0.5px;
    border-radius: 10px !important;
  }
</style>
