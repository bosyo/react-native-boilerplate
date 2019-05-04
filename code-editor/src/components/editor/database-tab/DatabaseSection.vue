<template>
  <div>
    <div class="columns">
      <div class="column">
        <DatabaseCardList/>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <DatabaseCardList/>
      </div>
    </div>
  </div>
</template>

<script>
import DatabaseCardList from '@/components/editor/database-tab/DatabaseCardList'
export default {
  name: 'DatabaseSection',
  components: {
    DatabaseCardList
  }
}
</script>
<style>
</style>
