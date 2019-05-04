/* eslint-disable */
<template>
      <div id="columnConatiner" class="columns" >
        <div id="left-col" class="column cols">
          <Accordion/>
        </div>
        <div id="right-col" class="column is-two-thirds cols ">
          <div class="columns">
            <div class="column">
              <Tabs @change-tab="changeTab"/>
            </div>
          </div>
              <AppSection v-if="activeTab === 'App'"/>
              <DatabaseSection v-if="activeTab === 'Database'"/>
              <RepositorySection v-if="activeTab === 'Repository'"/>
              <ServersSection v-if="activeTab === 'Servers'"/>
              <FeaturesSection v-if="activeTab === 'Features'"/>
              <TeamSection v-if="activeTab === 'Team'"/>
        </div>
      </div>
</template>

<script>
import Accordion from '@/components/editor/Accordion'
import Tabs from '@/components/editor/Tabs'
import AppSection from '@/components/editor/app-tab/AppSection'
import DatabaseSection from '@/components/editor/database-tab/DatabaseSection'
import RepositorySection from '@/components/editor/repository-tab/RepositorySection'
import ServersSection from '@/components/editor/servers-tab/ServersSection'
import FeaturesSection from '@/components/editor/features-tab/FeaturesSection'
import TeamSection from '@/components/editor/team-tab/TeamSection'

export default {
  name: 'HelloWorld',
  data () {
    return {
      activeTab: 'App'
    }
  },
  components: {
    Accordion,
    Tabs,
    AppSection,
    DatabaseSection,
    RepositorySection,
    ServersSection,
    FeaturesSection,
    TeamSection
  },
  methods: {
    changeTab (tabName) {
      // console.log('tab daw', tabName)
      this.activeTab = tabName
      console.log('Active tab : ', this.activeTab)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{
    color:white;
    border-radius: 0 !important;
  }
  #left-col{
    padding: 0px;
  }
  #right-col{
    background: #4b4b4b;
    padding: 0px;
    padding:30px;
    min-height: 100vh;
  }
  #speedStatsHeader{
    margin-bottom: 30px;
  }
</style>
