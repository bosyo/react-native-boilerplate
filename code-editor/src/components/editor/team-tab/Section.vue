<template>
  <div style="padding-right: 25px;">
    <p style="padding:5px 0px" class="has-text-weight-bold is-size-5">{{section.name}}</p>
    <div v-for="(text, index) in section.textArr" v-bind:key="index">
      <div style="height: 70px; padding: 5px; margin-bottom: 3px; background: #4b4b4b;">
        {{text}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Section',
  props: ['section']
}
</script>
