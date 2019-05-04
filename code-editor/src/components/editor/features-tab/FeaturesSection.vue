<template>
  <div class="columns">
    <div id="leftColumn" class="column is-one-third is-paddingless">
      <div v-for="(tab, index) in tabs" v-bind:key="index">
        <FeatureTabs v-bind:tab="tab"  v-bind:index="index" v-bind:activeTabIndex='activeTabIndex' @clicked="handleClick(index)"/>
      </div>
    </div>
    <div class="column" id="rightColumn">
      <div class="columns is-multiline">
        <div class="column is-full">
          <div class="columns is-multiline">
            <div class="column is-one-fifth">
              <p>FEATURE</p>
              <small>V1.O</small>
            </div>
            <div class="column">
              <button class="is-pulled-left">SSH</button>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="section" style="border-top: solid white 0.5px; padding: 30px 0px;">
            <p class="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eos
              illo expedita asperiores rem iure aliquid dolore, pariatur
              dignissimos, minima inventore? Minima voluptatum nulla, error omnis
              laboriosam voluptatibus rem aperiam.
            </p>
            <h1 class="content">MORE INFORMATION</h1>
            <p class="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eos
              illo expedita asperiores rem iure aliquid dolore, pariatur
              dignissimos, minima inventore? Minima voluptatum nulla, error omnis
              laboriosam voluptatibus rem aperiam.
            </p>
          </div>
        </div>
        <div class="column is-full">
          <div class="section">
            <button class="button is-fullwidth has-text-centered has-text-grey-dark has-text-weight-bold">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeatureTabs from '@/components/editor/features-tab/FeatureTabs'
export default {
  name: 'FeatureSection',
  components: {
    FeatureTabs
  },
  data () {
    return {
      tabs: [
        {name: 'FEATURE'},
        {name: 'FEATURE'},
        {name: 'FEATURE'},
        {name: 'FEATURE'}
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
    padding: 5px 10px !important;
  }
</style>
