<template>
  <div class="col-lg-3 col-md-4">
    <div class="profile">
      <div class="profile-name">
        <span class="name">{{ developer }}</span>
        <br>
        <span class="job">{{ job }}</span>
      </div>
      <figure class="profile-image">
        <img src="../../../src/assets/images/profile.jpg" alt>
      </figure>
      <ul class="profile-information">
        <li></li>
        <li>
          <p>
            <span>Name:</span> {{ developer }}
          </p>
        </li>
        <li>
          <p>
            <span>Job:</span> {{ job }}
          </p>
        </li>
        <li>
          <p>
            <span>Email:</span> {{ email }}
          </p>
        </li>
        <li>
          <p>
            <span>Skype:</span> {{ skype }}
          </p>
        </li>
      </ul>
      <div class="col-md-12">
        <button class="site-btn icon">
          <a href="https://drive.google.com/open?id=1oi4oEMZMHb3605AXxOKE7EvzFb7vgaei" download>Download Cv</a>
          <i class="fa fa-download" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import myMixin from './../../mixins/profile.mixins.js'
import {store} from './../../store/index.js'

export default {
  mixins: [myMixin],
  data() {
    return {
      developer: store.getters.DEVELOPER,
      job: store.getters.JOB,
      email: store.getters.EMAIL,
      skype: store.getters.SKYPE,
      address: store.getters.ADDRESS,
      phone:store.getters.PHONE,
      about: store.getters.ABOUT
    }
  },
  methods: {
  }
};

/**
 *  store.commit('changeEmail',   {
    email: 'temitope.olotin@andela.com'
  }
 */
</script>

<style>
.site-btn a  {
  color: #ffffff;
  text-decoration: none;
}

.site-btn a:hover {
  color: cornsilk;
}
</style>

