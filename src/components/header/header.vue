<template>
  <header class="col-md-12">
    <nav>
      <div class="row">
        <!-- navigation bar -->
        <div class="col-md-8 col-sm-8 col-xs-4">
          <ul class="tabs">
            <li class="tab">
              <a class="home-btn" href="#home">
                <i class="fa fa-home" aria-hidden="true"></i>
              </a>
            </li>
            <li class="tab">
              <a href="#resume">RESUME</a>
            </li>
            <li class="tab">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-8 dynamic">
          <a :href="mailtoEmail"  class="pull-right site-btn icon hidden-xs">
            Hire Me
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </a>
          <div class="hamburger pull-right hidden-lg hidden-md">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div class="hidden-md social-icons pull-right">
            <SocialLinks :v_data="social"/>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// Import mixins
import myMixin from './../../mixins/profile.mixins.js'

// Import components
import SocialLinks from './../partials/social/social_links.vue'

export default {
  components: {
    SocialLinks,
  },
  mixins: [myMixin],
  computed: {
    mailtoEmail: function() {
      return 'mailto:' + this.email;
    }
  }
};
</script>

<style>
</style>
