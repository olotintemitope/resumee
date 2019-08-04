<template>
<div id="contact">
    <div class="row">
        <!-- Contact Form -->
        <section class="contact-form col-md-6 padding_30 padbot_45">
            <div class="section-title top_15 bottom_30">
                <span></span>
                <h2 title="Contact Form">Contact Form</h2>
            </div>
            <form class="site-form" @submit.prevent="processForm">
                <div class="row">
                    <div class="col-md-6">
                        <input class="site-input" placeholder="Name" name="name" v-model="name" required>
                        </div>
                        <div class="col-md-6">
                            <input class="site-input" placeholder="E-mail" name="email" v-model="email" required>
                        </div>
                            <div class="col-md-12">
                                <textarea class="site-area" placeholder="Message" name="message" v-model="message" required></textarea>
                            </div>
                            <div class="col-md-12 top_15 bottom_30">
                                <button class="site-btn" type="submit">Submit</button>
                            </div>
                        </div>
            </form>
        </section>
        <!-- Contact Informations -->
        <section class="contact-info col-md-6 padding_30 padbot_45">
            <div class="section-title top_15 bottom_30">
                <span></span>
                <h2 title="Contact Informations">Contact Informations</h2>
            </div>
            <ul>
                <li>
                    <span>Address:</span> {{ address }}
                </li>
                <li>
                    <span>Phone:</span> {{ phone }}
                </li>
                <li>
                    <span>Job:</span> {{ job }}
                </li>
                <li>
                    <span>E-mail:</span> {{ email }}
                </li>
                <li>
                    <span>Skype:</span> {{ skype }}
                </li>
                <li>
                    <div class="social-icons top_15">
                        <SocialLinks :v_data="social" />
                    </div>
                </li>
            </ul>
        </section>
        <!-- Contact Map -->
        <section class="contact-map col-md-12 top_15 bottom_15">
            <div class="section-title bottom_30">
                <span></span>
                <h2 title="Contact Map">Contact Map.</h2>
            </div>
            <iframe role="application" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3963.512507110543!2d3.2888833153302004!3d6.583030124293412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s14+anfani+close+off+emmanuel+osakwe!5e0!3m2!1sen!2sng!4v1553276317757" height="350" style="border:0" allowfullscreen="allowfullscreen"></iframe>
        </section>
    </div>
</div>
</template>

<script>
// Import mixins
import myMixin from './../../mixins/profile.mixins.js'
// Import components
import SocialLinks from './../partials/social/social_links.vue'
// Import datastore
import {store} from './../../store/index'

export default {
     data() {
        return {
            job: store.getters.JOB,
            email: store.getters.EMAIL,
            skype: store.getters.SKYPE,
            address: store.getters.ADDRESS,
            phone: store.getters.PHONE,
            name: '',
            email: '',
            message: '',
            social: store.getters.SOCIAL
        }
    },
    mixins: [myMixin],
    components: {
        SocialLinks,
    },
    methods: {
        processForm: function () {
            this.name = '';
            this.email = '';
            this.message = '';
        }
    }
}
</script>

<style>
</style>
