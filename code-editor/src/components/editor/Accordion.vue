<template>
  <div id="aside" class="column">
    <BulmaAccordion
      dropdown
      :icon="'none'"
      :initialOpenItem="'1'"
      :caretAnimation="{
        duration: '.3s',
        timerFunc: 'ease-in-out'
    }"
      :slide="{
        duration: '.3s',
        timerFunc: 'ease'
    }"
    >
      <!-- The wrapper component for all the items -->
      <BulmaAccordionItem>
        <h4 slot="title">ACTIVITY LOGS</h4>
      </BulmaAccordionItem>
      <!-- add as many of these items as you need - fill them with content via the slots -->
      <BulmaAccordionItem>
        <h4 slot="title">PLUGINS</h4>
        <p slot="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eos
          illo expedita asperiores rem iure aliquid dolore, pariatur
          dignissimos, minima inventore? Minima voluptatum nulla, error omnis
          laboriosam voluptatibus rem aperiam.
        </p>
      </BulmaAccordionItem>
      <BulmaAccordionItem>
        <h4 slot="title">DEPENENCIES</h4>
        <p slot="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eos
          illo expedita asperiores rem iure aliquid dolore, pariatur
          dignissimos, minima inventore? Minima voluptatum nulla, error omnis
          laboriosam voluptatibus rem aperiam.
        </p>
      </BulmaAccordionItem>
      <BulmaAccordionItem>
        <h4 slot="title">CONFIGURATION</h4>
        <p slot="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eos
          illo expedita asperiores rem iure aliquid dolore, pariatur
          dignissimos, minima inventore? Minima voluptatum nulla, error omnis
          laboriosam voluptatibus rem aperiam.
        </p>
      </BulmaAccordionItem>
      <BulmaAccordionItem>
        <h4 slot="title">TASKS</h4>
        <p slot="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eos
          illo expedita asperiores rem iure aliquid dolore, pariatur
          dignissimos, minima inventore? Minima voluptatum nulla, error omnis
          laboriosam voluptatibus rem aperiam.
        </p>
      </BulmaAccordionItem>
    </BulmaAccordion>
  </div>
</template>

<script>
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'
export default {
  name: 'Accordion',
  data () {
    return {}
  },
  components: {
    BulmaAccordion,
    BulmaAccordionItem
  }
}
</script>
<style scoped>
  #aside{
    min-height: 100%;
    /*border: solid pink;*/
    background: #3f3f3f;
    padding:20px;
  }
  .card{
    background: #3f3f3f;
   }
  .card-header-title > h4{
    color: white;
  }
  .card-header-icon > span > svg{
    color:white;
  }
  .card-content > p {
    color:white
  }
</style>
