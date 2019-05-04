<template>
  <div class="tab" v-bind:class="{isTabActive:activeTabIndex === index}" @click="$emit('clicked',index)">
    {{tab.name}}
  </div>
</template>

<script>
export default {
  name: 'RepositoryTabs',
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
</style>
