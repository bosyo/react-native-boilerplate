<template>
  <div class="columns">
    <div class="column">
      <div class="columns">
        <div class="column is-one-fifth">
          App Name
        </div>
        <div class="column">
          <div class="field">
            <input class="input inversedInput" type="text" placeholder="VERIZON">
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-fifth">
          Platform
        </div>
        <div class="column">
          <div class="columns">
            <div class="column" style="padding-right: 0px;">
              <div class="select is-fullwidth">
                <select class="inversedInput">
                  <option>BROWSER</option>
                  <!--<option>With options</option>-->
                </select>
              </div>
            </div>
            <div class="column is-one-quarter" style="padding-left: 5px;">
              <div class="select is-fullwidth">
                <select class="inversedInput">
                  <option>V1.1</option>
                  <!--<option>With options</option>-->
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-fifth">
          Domain
        </div>
        <div class="column">
          <div class="columns">
            <div class="column" style="padding-right: 0px;">
              <div class="field">
                <input class="input inversedInput" type="text" placeholder="DOMAIN.COM">
              </div>
            </div>
            <div class="column is-one-quarter">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-fifth">
          <!--Domain-->
        </div>
        <div class="column">
          <div class="columns">
            <div class="column">
              dev.domain.com
            </div>
            <div class="column">
              dev.domain.com
            </div>
          </div>
          <div class="columns">
            <div class="column">
              staging.domain.com
            </div>
            <div class="column">
              staging.domain.com
            </div>
          </div>
          <div class="columns">
            <div class="column">
              pre.domain.com
            </div>
            <div class="column">
              pre.domain.com
            </div>
          </div>
          <div class="columns">
            <div class="column">
              www.domain.com
            </div>
            <div class="column">
              www.domain.com
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <p>GLOBAL STYLES</p>
          <p>SETTINGS</p>
        </div>
      </div>
    </div>
    <div class="column is-two-fifths">
      <!--<div class="column">-->
        <div id="speedStatsHeader">
          <p>SPEED STATS</p>
        </div>
        <ul>
          <li v-for="(stat, index) in speedStats" :key="index">
            <div class="columns">
              <div class="column">
                {{stat.name}}
              </div>
              <div class="column">
                {{stat.value}}
              </div>
            </div>
          </li>
        </ul>
      <!--</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSection',
  data () {
    return {
      speedStats: [
        { name: 'Global Average', value: '5.96.s' },
        { name: 'Mobile Edge', value: '173.69.s' },
        { name: '2G', value: '148.95.s' },
        { name: '3G SLOW', value: '104.11.s' },
        { name: '3G FAST', value: '26.23.s' },
        { name: '3G BASIC', value: '26.08.s' },
        { name: '4G', value: '4.78.s' },
        { name: 'LTE', value: '3.53.s' },
        { name: 'DIAL UP', value: '829.78.s' },
        { name: 'DSL', value: '27.71.s' },
        { name: 'CABLE', value: '8.32.s' },
        { name: 'FIOS', value: '2.08.s' }
      ]
    }
  }
}
</script>
<style>
  .inversedInput{
    background:#626262 !important;
    color:white !important;
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white !important;
    opacity: 1; /* Firefox */
  }
  .select:after{
    border-color: white !important;
  }
</style>
