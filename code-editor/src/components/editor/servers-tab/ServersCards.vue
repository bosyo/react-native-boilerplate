<template>
  <div class="">
    <div v-for="(card, index) in cards" v-bind:key="card.id">
      <!--<ul>-->
        <!--<li >-->
          <ServersCard v-bind:index="index" v-bind:card="card" @addCard="$emit('addCard')"/>
        <!--</li>-->
      <!--</ul>-->
      <!--<p>test</p>-->
    </div>
  </div>
</template>

<script>
import ServersCard from '@/components/editor/servers-tab/ServersCard'
export default{
  name: 'ServersCards',
  props: ['cards'],
  components: {
    ServersCard
  }
}
</script>
