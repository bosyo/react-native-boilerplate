<template>
  <div class="columns">
    <div id="leftColumn" class="column is-one-third is-paddingless">
      <div v-for="(tab, index) in tabs" v-bind:key="index">
        <TeamTabs v-bind:tab="tab"  v-bind:index="index" v-bind:activeTabIndex='activeTabIndex' @clicked="handleClick(index)"/>
      </div>
    </div>
    <div class="column" id="rightColumn">
      <div class="columns is-multiline">
        <div class="column is-full">
          <div class="columns is-multiline">
            <div class="column is-one-fifth">
              <div class="round-image is-pulled-right">
              </div>
            </div>
            <div class="column">
              <p class="is-size-4">Jane Doe</p>
              <p>Text</p>
              <div class="columns">
                <div class="column">
                  <button class="has-text-white has-text-weight-bold">TEXT</button>
                  <button class="has-text-white has-text-weight-bold">TEXT</button>
                  <button class="has-text-white has-text-weight-bold">TEXT</button>
                </div>
              </div>
            </div>
            <div class="column is-full" style="padding:20px 30px;">
              <div class="columns" style="border-top: solid white 0.5px">
                <div class="column is-paddingless">
                  <div v-for="(section, index) in sections" v-bind:key="index">
                    <Section v-bind:section="section"/>
                  </div>
                </div>
                <div class="column is-paddingless">
                  <div v-for="(section, index) in sections2" v-bind:key="index">
                    <Section v-bind:section="section"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeamTabs from '@/components/editor/team-tab/TeamTabs'
import Section from '@/components/editor/team-tab/Section'
export default {
  name: 'TeamSection',
  components: {
    TeamTabs,
    Section
  },
  data () {
    return {
      tabs: [
        {name: 'John Doe'},
        {name: 'Jane Doe'},
        {name: 'John Doe'},
        {name: 'Jane Doe'}
      ],
      sections: [
        {name: 'Contact Info', textArr: ['Text', 'Text']},
        {name: 'Basic Info', textArr: ['Text', 'Text']},
        {name: 'Social Accounts', textArr: ['Text']}
      ],
      sections2: [
        {name: 'More Info', textArr: ['Text', 'Text', 'Text', 'Text']}
      ],
      activeTabIndex: 0,
      lastUpdated: '11 hours ago'
    }
  },
  methods: {
    handleClick: function (index) {
      // console.log("Tab clicked >>>>> ",index);
      this.activeTabIndex = index
      // this.$emit('change-tab', tabName)
    }
  }
}
</script>
<style scoped>
  #leftColumn{
    /*border: solid pink;*/
  }
  #rightColumn{
    /*border: solid red;*/
    min-height: 85vh;
    background: #606060;
  }
  .table{
    background-color:transparent !important
  }
  td{
    /*color:black*/
  }
  th{
    color:white !important
  }
  select{
    background: transparent;
    border: 0;
    color: white;
  }
  button{
    background: #7f7f7f;
    padding: 5px 20px !important;
    border: 0px;
    margin-top: 5px;
    border-radius: 2px !important;
  }
  .round-image{
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 50% !important;
  }
</style>
