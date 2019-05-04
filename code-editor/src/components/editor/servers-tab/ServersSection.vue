<template>
  <div>
    <div class="columns">
      <div class="column">
        <ServersCardList/>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <ServersCardList/>
      </div>
    </div>
  </div>
</template>

<script>
import ServersCardList from '@/components/editor/servers-tab/ServersCardList'
export default {
  name: 'ServersSection',
  components: {
    ServersCardList
  }
}
</script>
<style>
</style>
