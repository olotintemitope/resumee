<template>
    <div>
        <a class="fb" :href="social.facebook" title="facebook icon">
        <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a class="tw" :href="social.twitter" title="twitter icon">
        <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a class="ins" :href="social.github" title="github icon">
        <i class="fa fa-github" aria-hidden="true"></i>
        </a>
        <a class="dr" :href="social.linkedin" title="linkedin icon">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
    </div>
</template>

<script>

import {store} from './../../../store/index'

export default {
    props: {
        v_data: Object
    },
    data() {
        return {
            social: store.getters.SOCIAL
        }
    }
}
</script>

<style>

</style>
