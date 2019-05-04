<template>
  <div id="navContainer" class="columns">
    <div class="column" v-on:click="changeTab('App');">
      <button class="button has-text-white btn" v-bind:class="{ btnActive: activeTab === 'App'}">
        APP
      </button>
    </div>
    <div class="column"  v-on:click="changeTab('Database');">
      <button class="button has-text-white btn" v-bind:class="{ btnActive: activeTab === 'Database'}">DATABASE</button>
    </div>
    <div class="column"  v-on:click="changeTab('Servers');">
      <button class="button has-text-white btn" v-bind:class="{ btnActive: activeTab === 'Servers'}">SERVERS</button>
    </div>
    <div class="column"  v-on:click="changeTab('Repository');">
      <button class="button has-text-white btn" v-bind:class="{ btnActive: activeTab === 'Repository'}">REPOSITORY</button>
    </div>
    <div class="column"  v-on:click="changeTab('Features');">
      <button class="button has-text-white btn" v-bind:class="{ btnActive: activeTab === 'Features'}">FEATURES</button>
    </div>
    <div class="column"  v-on:click="changeTab('Team');">
      <button class="button has-text-white btn" v-bind:class="{ btnActive: activeTab === 'Team'}">TEAM</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    changeTab2: { type: Function }
  },
  data () {
    return {
      activeTab: 'App'
    }
  },
  methods: {
    changeTab: function (tabName) {
      this.activeTab = tabName
      this.$emit('change-tab', tabName)
    }
  }
}
</script>
<style>
  .btn{
    /*border: solid pink;*/
    width: 100%;
    background: #505050;
  }
  .btnActive{
    background: white;
    color:#505050 !important;
  }
</style>
