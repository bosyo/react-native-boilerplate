<template>
  <div class="">
    <div v-for="(card, index) in cards" v-bind:key="card.id">
      <!--<ul>-->
        <!--<li >-->
          <DatabaseCard v-bind:index="index" v-bind:card="card" @addCard="$emit('addCard')"/>
        <!--</li>-->
      <!--</ul>-->
      <!--<p>test</p>-->
    </div>
  </div>
</template>

<script>
import DatabaseCard from '@/components/editor/database-tab/DatabaseCard'
export default{
  name: 'DatabaseCards',
  props: ['cards'],
  components: {
    DatabaseCard
  }
}
</script>
