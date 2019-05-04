<template>
  <div class="tab" v-bind:class="{isTabActive:activeTabIndex === index}" @click="$emit('clicked',index)">
    <div class="columns">
      <div class="column is-one-fifth" style="border-radius: 20px">
        <div class="round-image is-pulled-right">
        </div>
      </div>
      <div class="column">
        <p class="has-text-weight-bold">{{tab.name}}</p>
        <p>Text</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamTabs',
  props: ['tab', 'index', 'activeTabIndex']
}
</script>
<style scoped>
  .tab{
    padding: 15px 15px 15px 30px;
    /*border: solid red;*/
  }
  .isTabActive{
    background: #606060;
  }
  .round-image{
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50% !important;
  }
</style>
