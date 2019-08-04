<template>
  <div class="row">
    <section class="discography col-md-12 padding_45 padbot_45">
      <div class="section-title bottom_45">
        <span></span>
        <h2>Skills</h2>
      </div>
      <!-- an album -->
      <div class="row">
        <div class="col-md-4 album-cover bottom_30">
          <img src="./../../assets/images/discography-2.jpg" alt>
        </div>
        <div class="col-md-8 album bottom_60">
          <ul>
            <li>Technologies</li>
            <li v-for="technology in technologies" :key="technology" v-html="technology">
                {{ technology }}
            </li>
          </ul>
        </div>
      </div>
      <hr>
    </section>
  </div>
</template>

<script>
import {store} from './../../store/index.js'
export default {
  data() {
    return {
      technologies: store.getters.TECHNOLOGIES
    }
  }
};
</script>

<style scoped>
ul > li {
    text-align: left;
}
</style>
