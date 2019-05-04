<template>
  <div class="columns">
    <div id="leftColumn" class="column is-one-third is-paddingless">
      <div v-for="(tab, index) in tabs" v-bind:key="index">
        <RepositoryTabs v-bind:tab="tab"  v-bind:index="index" v-bind:activeTabIndex='activeTabIndex' @clicked="handleClick(index)"/>
      </div>
    </div>
    <div class="column" id="rightColumn">
      <div class="columns is-multiline">
        <div class="column is-full">
          <div class="columns is-multiline">
            <div class="column">
              <p>{{gitURL}}}</p>
              <small>Last updated {{lastUpdated}}</small>
            </div>
            <div class="column">
              <button class="is-pulled-left">SSH</button>
            </div>
            <div class="column">
              <div class="select is-pulled-right">
                <select>
                  <option>master</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
            <table class="table is-fullwidth">
              <thead>
              <tr>
                <th>Author</th>
                <th>Commit</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Zyon</td>
                  <td>9632afa</td>
                  <td>msg for the commit</td>
                  <td>11 hours ago</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RepositoryTabs from '@/components/editor/repository-tab/RepositoryTabs'
export default {
  name: 'RepositorySection',
  components: {
    RepositoryTabs
  },
  data () {
    return {
      tabs: [
        {name: 'DOMAIN.COM'},
        {name: 'DOMAIN.COM'},
        {name: 'DOMAIN.COM'},
        {name: 'DOMAIN.COM'}
      ],
      activeTabIndex: 0,
      gitURL: 'GIT@DOMAIN.COM/DEV.GIT',
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
