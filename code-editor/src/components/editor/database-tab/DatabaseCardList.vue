<template>
  <div class="">
    <div class="columns">
      <div class="column is-one-third">
        Testing
      </div>
      <div class="column">
        <ul style="display: flex; flex-direction: row;">
          <li v-for="(button, index) in buttons" :key="index" style="border-bottom: solid white; margin-right: 10px;">
            <div class="columns">
              <div class="column">
                {{button.name}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <ul style="display: flex; flex-direction: row;">
          <li v-for="(tab, index) in tabs" :key="index" style="margin-right: 10px">
            <button class="button has-text-white tabs" v-bind:class="{ tabActive: activeTab === tab.name}" v-on:click="changeTab(tab.name);">
              {{tab.name}}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <DatabaseCards v-bind:cards="cards" @addCard="addTab()"/>
  </div>
</template>

<script>
// import DatabaseCard from '@/components/editor/database-tab/DatabaseCard'
import DatabaseCards from '@/components/editor/database-tab/DatabaseCards'
export default {
  name: 'DatabaseCardList',
  components: {
    DatabaseCards
  },
  data () {
    return {
      buttons: [
        {name: 'View'},
        {name: 'Edit'}
      ],
      tabs: [
        {name: 'One'},
        {name: 'Two'}
      ],
      cards: [
        {name: 'ADD'},
        {name: 'THREE'},
        {name: 'FOUR'},
        {name: 'FIVE'}
      ],
      activeTab: 'One'
    }
  },
  props: {
  },
  methods: {
    changeTab: function (tabName) {
      this.activeTab = tabName
      // this.$emit('change-tab', tabName)
    },
    addTab: function () {
      this.cards.push({name: 'New tab'})
    }
  }
}
</script>
<style>
  .tabs{
    width: 100%;
    background: #505050;
    padding: 0px 50px 0px 50px;
  }
  .tabActive{
    background: white;
    color:#505050 !important;
  }
  .is-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
